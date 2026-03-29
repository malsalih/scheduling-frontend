import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
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
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const response=await axiosClient.post('/login', {email,password})
            const data=response.data;
            const user =data.user;
            const role = data.user.role;
            const token = data.token;

            setAuthContext(token,user,role);

            if (role === 'provider') {
                navigate('/provider-dashboard'); // نرسل المزود للوحة التحكم
            } else {
                navigate('/'); // نرسل المستخدم العادي للرئيسية
            }

        } catch (err) {
            // 5. التعامل مع الأخطاء
            if (err.response && err.response.status === 401) {
                setError(err.response.data.message || "البريد الإلكتروني أو كلمة المرور غير صحيحة.");
            } else {
                setError("حدث خطأ في الاتصال بالخادم. يرجى المحاولة لاحقاً.");
            }
        } finally {
            // 6. إيقاف حالة التحميل سواء نجح أو فشل
            setLoading(false); 
        }

    }


    return (
        <div dir="rtl" style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'sans-serif' }}>
            <h2 style={{ textAlign: 'center', color: '#003366' }}>تسجيل الدخول</h2>
            
            {/* مكان عرض رسالة الخطأ الحمراء إن وجدت */}
            {error && <div style={{ backgroundColor: '#ffe6e6', color: '#cc0000', padding: '10px', borderRadius: '5px', marginBottom: '15px', textAlign: 'center' }}>
                {error}
            </div>}

            {/* ربطنا الدالة بالـ Form مباشرة */}
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>البريد الإلكتروني:</label>
                    <input 
                        type="email" 
                        required
                        value={email} // الربط بالمتغير
                        onChange={(e) => setEmail(e.target.value)} // تحديث المتغير عند الكتابة
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>كلمة المرور:</label>
                    <input 
                        type="password" 
                        required
                        value={password} // الربط بالمتغير
                        onChange={(e) => setPassword(e.target.value)} // تحديث المتغير عند الكتابة
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>

                {/* زر ذكي يتعطل ويغير نصه أثناء التحميل */}
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        width: '100%', 
                        padding: '12px', 
                        backgroundColor: loading ? '#999' : '#003366', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: '16px'
                    }}
                >
                    {loading ? 'جاري التحميل...' : 'دخول'}
                </button>
            </form>
        </div>
    );





}

