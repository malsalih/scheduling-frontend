import { useState,createContext,useContext } from "react";


const AuthContext=createContext({
    user:null,
    token:null,
    role:null,
    setAuthContext:()=>{},
    logout:()=>{}
})

export const AuthProvider =({children})=>{
    const [user,setUser]= useState(JSON.parse(localStorage.getItem('USER')));
    const [token,setToken]= useState(localStorage.getItem('ACCESS_TOKEN'));
    const [role,setRole]= useState(localStorage.getItem('ROLE'));

    const setAuthContext=(token,user,role)=>{
        setToken(token);
        setRole(role);
        setUser(user);

        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
            localStorage.setItem('USER', JSON.stringify(user));
            localStorage.setItem('ROLE', role);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
            localStorage.removeItem('USER');
            localStorage.removeItem('ROLE');
        }
        
    }

    const logout = () => {
        setAuthContext(null, null, null);
    };

    return (
        <AuthContext.Provider value={{ user, token, role, setAuthContext, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);