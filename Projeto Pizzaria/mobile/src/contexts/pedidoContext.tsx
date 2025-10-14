import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from '../services/api'; 

interface PedidoItem {
    product_id: string;
    name: string;
    image_url: string;
    qtd: number;
    price: number; // preço unitário do produto após customização
    totalPrice?: number; // preço total do produto (unitário * qtd + adicionais)
    removedIngredients: string[];
    extras: string[];
    observation: string;
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
        setpedido((prev) => [...prev, item]); // já recebe totalPrice do CustomizeProduct
    };

    const removeItem = (product_id: string) => {
        setpedido((prev) => prev.filter((i) => i.product_id !== product_id));
    };

    const clearPedido = () => {
        setPedidoStatus("");
        setpedido([]);
        setPedidoId(null);
    };

    const totalPedido = pedido.reduce((acc, item) => acc + item.price, 0);

    // Função para buscar status do pedido
    const fetchPedidoStatus = async () => {
        if (!pedidoId) return;
        try {
            const response = await api.get(`/pedidos/${pedidoId}/status`);
            setPedidoStatus(response.data.status);
        } catch (error) {
            setPedidoStatus(null);
        }
    };

    // Buscando o status a cada 5 segundos
    useEffect(() => {
        if (!pedidoId) return;
        fetchPedidoStatus(); // busca inicial
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
    if (!context)
        throw new Error("usePedido deve ser usado dentro de um PedidoProvider");
    return context;
};