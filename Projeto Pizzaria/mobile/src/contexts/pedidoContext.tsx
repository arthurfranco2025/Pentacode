import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";

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
    statusPedido: string;
    setStatusPedido: (status: string) => void;
    updateStatusPedido: (novoStatus: string) => Promise<void>;
}

const pedidoContext = createContext<pedidoContextType | undefined>(undefined);

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
    const [pedido, setpedido] = useState<PedidoItem[]>([]);
    const [pedidoId, setPedidoId] = useState<string | null>(null);
    const [statusPedido, setStatusPedido] = useState<string>("");

    // Função para buscar pedidos da comanda e atualizar status e pedidoId
    const fetchPedidoStatus = async (comanda_id?: string) => {
        try {
            if (!comanda_id && !pedidoId) return;
            const idParaBuscar = comanda_id || pedidoId;
            const response = await api.post("/pedido/listPedidosPorComanda", { comanda_id: idParaBuscar });
            // Supondo que retorna um array de pedidos, pega o primeiro
            if (response.data && response.data.length > 0) {
                setStatusPedido(response.data[0].status || "");
                setPedidoId(response.data[0].id); // Garante que pedidoId seja o ID do pedido real
            }
        } catch (error) {
            console.error("Erro ao buscar status do pedido:", error);
        }
    };

    useEffect(() => {
        if (pedidoId) fetchPedidoStatus();
    }, [pedidoId]);

    const addItem = (item: PedidoItem) => {
        setpedido((prev) => [...prev, item]); // já recebe totalPrice do CustomizeProduct
    };

    const removeItem = (product_id: string) => {
        setpedido((prev) => prev.filter((i) => i.product_id !== product_id));
    };

    const clearPedido = () => {
        setStatusPedido("");
        setpedido([]);
        setPedidoId(null);
    };

    const totalPedido = pedido.reduce((acc, item) => acc + item.price, 0);

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
                updateStatusPedido,
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
