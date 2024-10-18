import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
    email: "",
    token: localStorage.getItem("bookchampions-token") ?? "",
};
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);

    const handleLogin = (email, token) => {
        setUser({
            email,
            token
        });
        localStorage.setItem("bookchampions-token", token);
    };

    const handleLogout = () => {
        setUser(initialState);
        localStorage.removeItem("bookchampions-token");
    };

    return <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
        {children}
    </AuthContext.Provider>;
}

