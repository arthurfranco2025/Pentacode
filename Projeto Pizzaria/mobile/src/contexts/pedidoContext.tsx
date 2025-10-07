import React, { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../services/api"; // ✅ certifique-se que o caminho está correto

interface PedidoItem {
    product_id: string;
    name: string;
    image_url: string;
    qtd: number;
    price: number;
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
    statusPedido: string;
    setStatusPedido: (status: string) => void;
    updateStatusPedido: (novoStatus: string) => Promise<void>; // ✅ nova função
}

const pedidoContext = createContext<pedidoContextType | undefined>(undefined);

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
    const [pedido, setpedido] = useState<PedidoItem[]>([]);
    const [pedidoId, setPedidoId] = useState<string | null>(null);
    const [statusPedido, setStatusPedido] = useState<string>("");

    const addItem = (item: PedidoItem) => {
        setpedido((prev) => [...prev, item]);
    };

    const removeItem = (product_id: string) => {
        setpedido((prev) => prev.filter((i) => i.product_id !== product_id));
    };

    const clearPedido = () => {
        setpedido([]);
        setStatusPedido("");
        setPedidoId(null);
    };

    const totalPedido = pedido.reduce((acc, item) => acc + item.price, 0);

    // ✅ função para atualizar o status na API
    const updateStatusPedido = async (novoStatus: string) => {
        try {
            if (!pedidoId) throw new Error("Pedido ID não encontrado.");

            await api.put(`/pedido/editarStatus`, {
                pedido_id: pedidoId,
                status: novoStatus,
            });

            setStatusPedido(novoStatus);
        } catch (error: any) {
            console.error("Erro ao atualizar status do pedido:", error);
            throw new Error(error?.response?.data?.message || "Erro ao atualizar status");
        }
    };

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
                statusPedido,
                setStatusPedido,
                updateStatusPedido, // ✅ exportado
            }}
        >
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
