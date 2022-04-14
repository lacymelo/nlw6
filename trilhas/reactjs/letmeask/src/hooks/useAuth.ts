import { useContext } from "react";

import { AuthContext } from '../contexts/AuthContextProvider'

function useAuth(){
    const value = useContext(AuthContext)

    return value
}

export { useAuth }