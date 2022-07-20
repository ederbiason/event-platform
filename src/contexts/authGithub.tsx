import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider, User, IdTokenResult } from "firebase/auth";
import { app } from '../services/firebase';
import { useNavigate } from "react-router-dom";

const provider = new GithubAuthProvider()

type AuthContextType = {
    user: User | string;
    signed: Boolean;
    signInWithGithub: () => void;
}

type AuthGithubProps = {
    children: ReactNode;
}

export const AuthGithubContext = createContext({} as AuthContextType)

export function AuthGithubProvider({ children }: AuthGithubProps) {
    const auth = getAuth(app)
    const [user, setUser] = useState<User | string>('')

    const navigate = useNavigate()
    
    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")

            if(sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStoreAuth()
    }, [])
    

    const signInWithGithub = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;

                setUser(user)
                sessionStorage.setItem("@AuthFirebase:token", token!)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

                navigate('/event')
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GithubAuthProvider.credentialFromError(error);
            });
    }

    return(
        <AuthGithubContext.Provider
            value={{signInWithGithub, signed: !!user, user}}
        >
            {children}
        </AuthGithubContext.Provider>
    )
}