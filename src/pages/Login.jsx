import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axios";
import { useAuth } from "../contexts/AuthContext";

export default function Login(){
    const {setAuthContext}= useAuth();
    const navigate =useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    async function handleLogin(e) {
        e.preventDefaults();
        setLoading(true);
        setError(false);

        try {
            const response=await axiosClient.post('/login', {email,password})
            const data=response.data;
            const user =data.user;
            const role = data.user.role;
            const token = data.token;

            

            setAuthContext(token,user,role);

        } catch (error) {
            
        }

    }





}

