import { createContext, ReactNode, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { auth } from "../services/firebase";


type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

const AuthContext = createContext({} as AuthContextType)

function AuthContextProvider(props: AuthContextProviderProps){
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                const { displayName, photoURL, uid } = user

                if(!displayName || !photoURL){
                    throw new Error('Missing information from Google Account.')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            } 
        })

        //encerrando o evento useEffect
        return () => {
            unsubscribe()
        }
    }, [])

    async function signInWithGoogle(){
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider).then(result => {
            if(result.user){
                const { displayName, photoURL, uid } = result.user

                if(!displayName || !photoURL){
                    throw new Error('Missing information from Google Account.')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }            
        })
    }

    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children }
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }