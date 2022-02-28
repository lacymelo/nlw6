import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    SCOPE,
    CLIENT_ID,
    CDN_IMAGE,
    REDIRECT_URI,
    RESPONSE_TYPE
} from '../configs';
// const { SCOPE } = process.env;
// const { CLIENT_ID } = process.env;
// const { CDN_IMAGE } = process.env;
// const { REDIRECT_URI } = process.env;
// const { RESPONSE_TYPE } = process.env;

import api from '../services/api';
import { COLLECTION_USER } from '../configs/database';

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    singOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<User>({} as User);

    const [loading, setLoading] = useState(false);

    async function singOut() {
        setUser({} as User);

        await AsyncStorage.removeItem(COLLECTION_USER);
    }

    async function signIn(){
        try {
            setLoading(true);

            //acessa a api do discord
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if(type === 'success' && !params.error){
                //Guarda o token
                api.defaults.headers.common['authorization'] = `Bearer ${params.access_token}`;

                //solicita a api as informações do usuário
                const userInfo = await api.get('/users/@me');

                const { username, avatar, id } = userInfo.data;

                const firstName = username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${id}/${avatar}.png`;

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

                setUser(userData);
            }
        } catch  { 
            throw new Error('Não foi possível autenticar');  
        } finally {
            setLoading(false);
        }
    }

    async function loadUserStorageData(){
        const storage = await AsyncStorage.getItem(COLLECTION_USER);

        if(storage){
          const userLogged = JSON.parse(storage) as User;
            //Guarda o token
            api.defaults.headers.common['authorization'] = `Bearer ${userLogged.token}`;
          setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                singOut,
                signIn,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth,
}