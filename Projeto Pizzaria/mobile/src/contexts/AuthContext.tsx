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
    token: string
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email?: string;
    password?: string;
    guest?: boolean; // novo
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
    cpf: string;
    data_nasc: Date;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    const isAuthenticated = !!user.name;

    useEffect(() => {
        async function getUser() {
            const userInfo = await AsyncStorage.getItem('@sujeitopizzaria');
            let hasUser: UserProps = JSON.parse(userInfo || '{}')

            if(Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }

            setLoading(false);
        }
        getUser();
    }, [])

    async function signIn({ email, password, guest = false }: SignInProps) {
        setLoadingAuth(true);

        try {
            let response;

            if (guest) {
                // Login como convidado
                response = await api.post('/login', { guest: true });
            } else {
                // Login normal
                if (!email || !password) {
                    throw new Error('Email e senha são obrigatórios');
                }
                response = await api.post('/login', { email, password });
            }

            const { id, name, email: userEmail, token } = response.data;

            const data = { id, name, email: userEmail, token };

            await AsyncStorage.setItem('@sujeitopizzaria', JSON.stringify(data));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email: userEmail,
                token,
            });

        } catch (err) {
            console.log('erro ao acessar', err);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear().then(() => {
            setUser({
                id: '',
                name: '',
                email: '',
                token: ''
            });
        });
        await AsyncStorage.removeItem('@comanda');
    }

    async function signUp({name, email, password, cpf, data_nasc}: SignUpProps) {
        setLoadingAuth(true);

        try {
            const response = await api.post('/cadastro', { 
                name,
                email,
                password,
                cpf,
                data_nasc,
            })

            setLoadingAuth(false);
            return response.data;

        } catch (err: any) {
            setLoadingAuth(false)

            if(err.response) {
                throw new Error(err.response.data.error || 'Erro ao cadastrar')
            } 
            throw new Error('Erro de conexão');
        }
    }

    return(
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
    )
}