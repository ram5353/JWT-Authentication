import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userName, setUserName] = useState('');

    const setName = (name) => {
        setUserName(name)
    }
    return (
        <UserContext.Provider value={{userName, setName}}>{children}</UserContext.Provider>
    )
}

export default UserContext;