import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  loadingComanda: boolean;
};

const ComandaContext = createContext<ComandaContextData>({} as ComandaContextData);

export function ComandaProvider({ children }: { children: ReactNode }) {
  const [comanda, setComanda] = useState<Comanda | null>(null);
  const [loadingComanda, setLoadingComanda] = useState(true);
  
  useEffect(() => {
    async function loadComanda() {
      try {
        const storedComanda = await AsyncStorage.getItem("@comanda");
        if (storedComanda) {
          setComanda(JSON.parse(storedComanda));
        }
      } catch (error) {
        console.log("Erro ao carregar comanda:", error);
      } finally {
        setLoadingComanda(false);
      }
    }

    loadComanda();
  }, []);

  useEffect(() => {
    async function saveComanda() {
      if (comanda) {
        await AsyncStorage.setItem("@comanda", JSON.stringify(comanda));
      }
    }

    if (comanda) saveComanda();
  }, [comanda]);

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

  async function limparComanda() {
    try {
        // Limpa o estado local
        setComanda(null);
        // Limpa os dados do AsyncStorage
        await AsyncStorage.removeItem('@comanda');
        
    } catch (error) {
        console.error('Erro ao limpar comanda:', error);
    }
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
        loadingComanda
      }}
    >
      {children}
    </ComandaContext.Provider>
  );
}

export function useComanda() {
  return useContext(ComandaContext);
}