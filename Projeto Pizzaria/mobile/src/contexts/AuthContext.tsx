import React, { useState, createContext, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from '../services/api'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<any>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email?: string; // pode ser email ou CPF
    password?: string;
    guest?: boolean;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
    cpf: string;
    data_nasc: Date;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    });

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user.name;

    useEffect(() => {
        async function getUser() {
            const userInfo = await AsyncStorage.getItem('@sujeitopizzaria');
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;
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
                response = await api.post('/login', { guest: true });
            } else {
                if (!email || !password) {
                    throw new Error('Email ou CPF e senha são obrigatórios');
                }

                // Detecta se é CPF (apenas números) ou email
                const isCPF = /^\d{11}$/.test(email.replace(/\D/g, ''));
                const loginData = isCPF 
                    ? { cpf: email.replace(/\D/g, ''), password } 
                    : { email, password };

                response = await api.post('/login', loginData);
            }

            const { id, name, email: userEmail, token } = response.data;
            const data = { id, name, email: userEmail, token };

            await AsyncStorage.setItem('@sujeitopizzaria', JSON.stringify(data));
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser(data);

        } catch (err: any) {
            const mensagem = err.response?.data?.message || err.response?.data?.error || err.message || 'Erro ao acessar';
            throw new Error(mensagem);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signUp({ name, email, password, cpf, data_nasc }: SignUpProps) {
        setLoadingAuth(true);

        try {
            const response = await api.post('/cadastro', { 
                name,
                email,
                password,
                cpf,
                data_nasc,
            });

            return response.data;

        } catch (err: any) {
            const mensagem = err.response?.data?.message || err.response?.data?.error || err.message || 'Erro de conexão';
            throw new Error(mensagem);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear();
        setUser({
            id: '',
            name: '',
            email: '',
            token: ''
        });
        await AsyncStorage.removeItem('@comanda');
    }

    return (
        <AuthContext.Provider 
            value={{ 
                user, 
                isAuthenticated, 
                signIn, 
                signUp,
                loading, 
                loadingAuth,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
