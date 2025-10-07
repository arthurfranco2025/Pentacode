import React, { createContext, useContext, useState, ReactNode } from "react";

type Item = {
  id: string;
  name: string;
  qtd: number;
  price: number;
  image_url?: string;
  extras?: string[];
  removedIngredients?: string[];
  observation?: string;
};

type Pedido = {
  id: string;
  items: Item[];
  total: number;
  createdAt: string;
  statusPedido: string;
};

type Comanda = {
  comandaId: string;
  mesaId: string;
  numero_mesa: number;
  pedidos: Pedido[];
};

type ComandaContextData = {
  comanda: Comanda | null;
  setComanda: (data: Comanda) => void;
  adicionarPedido: (pedido: Pedido) => void;
  removerPedido: (pedidoId: string) => void;
  calcularTotalComanda: () => number;
  limparComanda: () => void;
};

const ComandaContext = createContext<ComandaContextData>({} as ComandaContextData);

export function ComandaProvider({ children }: { children: ReactNode }) {
  const [comanda, setComanda] = useState<Comanda | null>(null);

  function adicionarPedido(pedido: Pedido) {
    if (!comanda) return;
    setComanda({
      ...comanda,
      pedidos: [...comanda.pedidos, pedido],
    });
  }

  function removerPedido(pedidoId: string) {
    if (!comanda) return;
    setComanda({
      ...comanda,
      pedidos: comanda.pedidos.filter(p => p.id !== pedidoId),
    });
  }

  function calcularTotalComanda() {
    if (!comanda) return 0;
    return comanda.pedidos.reduce((acc, p) => acc + p.total, 0);
  }

  function limparComanda() {
    setComanda(null);
  }

  return (
    <ComandaContext.Provider
      value={{
        comanda,
        setComanda,
        adicionarPedido,
        removerPedido,
        calcularTotalComanda,
        limparComanda,
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
}

export function useComanda() {
  return useContext(ComandaContext);
}
