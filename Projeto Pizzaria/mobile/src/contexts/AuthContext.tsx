import React, { useState, createContext, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<any>;
    updateLocalUser: (newUser: Partial<UserProps>) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
    cpf?: string;
    token: string;
    image_url?: string | null;
    guest?: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
};

type SignInProps = {
    email?: string; // pode ser email ou CPF
    password?: string;
    guest?: boolean;
};

type SignUpProps = {
    name: string;
    email: string;
    password: string;
    cpf: string;
    data_nasc: Date;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: "",
        name: "",
        email: "",
        token: "",
        image_url: undefined,
    });

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user.name;

    useEffect(() => {
        async function getUser() {
            const userInfo = await AsyncStorage.getItem("@sujeitopizzaria");
            let hasUser: UserProps = JSON.parse(userInfo || "{}");

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common["Authorization"] = `Bearer ${hasUser.token}`;
                setUser(hasUser);
            }

            setLoading(false);
        }

        getUser();
    }, []);

    async function signIn({ email, password, guest = false }: SignInProps) {
        setLoadingAuth(true);

        try {
            let response;

            if (guest) {
                // Login como convidado
                response = await api.post("/login", { guest: true });
            } else {
                if (!email || !password) {
                    throw new Error("Email, CPF e senha são obrigatórios");
                }

                // Detecta se é CPF (apenas números) ou email
                const isCPF = /^\d{11}$/.test(email.replace(/\D/g, ""));
                const loginData = isCPF
                    ? { cpf: email.replace(/\D/g, ""), password }
                    : { email, password };

                response = await api.post("/login", loginData);
            }

            const { id, name, email: userEmail, token, image_url} = response.data;
            const data: UserProps = { 
                id, 
                name, 
                email: userEmail, 
                token, 
                image_url, 
                guest: guest || false  
            };

            await AsyncStorage.setItem("@sujeitopizzaria", JSON.stringify(data));
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setUser(data);
        } catch (err: any) {
            const mensagem =
                err.response?.data?.message ||
                err.response?.data?.error ||
                err.message ||
                "Erro ao acessar";
            throw new Error(mensagem);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signUp({ name, email, password, cpf, data_nasc }: SignUpProps) {
        setLoadingAuth(true);

        try {
            const response = await api.post("/cadastro", {
                name,
                email,
                password,
                cpf,
                data_nasc,
            });

            return response.data;
        } catch (err: any) {
            const mensagem =
                err.response?.data?.message ||
                err.response?.data?.error ||
                err.message ||
                "Erro de conexão";
            throw new Error(mensagem);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function updateLocalUser(newUser: Partial<UserProps>) {
        const updated: UserProps = {
            id: newUser.id ?? user.id,
            name: newUser.name ?? user.name,
            email: newUser.email ?? user.email,
            cpf: newUser.cpf ?? user.cpf,
            token: newUser.token ?? user.token,
            image_url: newUser.image_url ?? user.image_url ?? undefined,
        } as UserProps;

        setUser(updated);
        await AsyncStorage.setItem("@sujeitopizzaria", JSON.stringify(updated));

        if (updated.token)
            api.defaults.headers.common["Authorization"] = `Bearer ${updated.token}`;
    }

    async function signOut() {
        await AsyncStorage.clear();
        await AsyncStorage.removeItem("@comanda");
        setUser({
            id: "",
            name: "",
            email: "",
            token: "",
            image_url: undefined,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                signIn,
                signUp,
                updateLocalUser,
                loading,
                loadingAuth,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}