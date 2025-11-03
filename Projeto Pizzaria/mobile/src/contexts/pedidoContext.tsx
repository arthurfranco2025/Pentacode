import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from '../services/api';

interface PedidoItem {
    item_id: string;
    name: string;
    image_url: string;
    qtd: number;
    price: number; // preço unitário do produto
    totalPrice?: number; // preço total do item (unitário + extras + 2º sabor)
    removedIngredients: string[];
    extras: string[];
    observation: string;
    secondFlavor?: {
        id: string;
        name: string;
        price: number;
        image_url?: string;
    };
    paidWithPoints?: boolean;
    pointsUsed?: number;
    totalPoints?: number;
}

interface pedidoContextType {
    pedido: PedidoItem[];
    addItem: (item: PedidoItem) => void;
    removeItem: (product_id: string) => void;
    clearPedido: () => void;
    totalPedido: number;
    pedidoId: string | null;
    setPedidoId: (id: string | null) => void;
    pedidoStatus: string | null;
    fetchPedidoStatus: () => void;
}

const pedidoContext = createContext<pedidoContextType | undefined>(undefined);

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
    const [pedido, setpedido] = useState<PedidoItem[]>([]);
    const [pedidoId, setPedidoId] = useState<string | null>(null);
    const [pedidoStatus, setPedidoStatus] = useState<string | null>(null);

    const addItem = (item: PedidoItem) => {
        // If caller already provided a computed totalPrice, use it directly.
        if (typeof item.totalPrice === 'number') {
            setpedido((prev) => [...prev, item]);
            return;
        }

        // Otherwise compute totalPrice from available fields.
        // For extras we only have names in PedidoItem.extras, so fall back to counting them as +1 each
        const extrasTotal = item.extras.reduce((acc, _) => acc + 1, 0);
        const secondFlavorPrice = item.secondFlavor ? item.secondFlavor.price / 2 : 0;
        const totalPrice = (item.price + secondFlavorPrice + extrasTotal) * item.qtd;

        setpedido((prev) => [...prev, { ...item, totalPrice }]);
    };

    const removeItem = (item_id: string) => {
        setpedido((prev) => prev.filter((i) => i.item_id !== item_id));
    };

    const clearPedido = () => {
        setPedidoStatus("");
        setpedido([]);
        setPedidoId(null);
    };

    const totalPedido = pedido.reduce((acc, item) => acc + (item.totalPrice ?? 0), 0);

    const fetchPedidoStatus = async () => {
        if (!pedidoId) return;
        try {
            const response = await api.get(`/pedidos/${pedidoId}/status`);
            setPedidoStatus(response.data.status);
        } catch (error) {
            setPedidoStatus(null);
        }
    };

    useEffect(() => {
        if (!pedidoId) return;
        fetchPedidoStatus();
        const interval = setInterval(fetchPedidoStatus, 5000);
        return () => clearInterval(interval);
    }, [pedidoId]);

    return (
        <pedidoContext.Provider
            value={{
                pedido,
                addItem,
                removeItem,
                clearPedido,
                totalPedido,
                pedidoId,
                setPedidoId,
                pedidoStatus,
                fetchPedidoStatus
            }}>
            {children}
        </pedidoContext.Provider>
    );
};

export const usePedido = () => {
    const context = useContext(pedidoContext);
    if (!context) throw new Error("usePedido deve ser usado dentro de um PedidoProvider");
    return context;
};