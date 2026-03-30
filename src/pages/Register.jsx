import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axiosClient from "../api/axios";


export default function Register(){
    const {setAuthContext}= useAuth();
    const navigate =useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState('user');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    async function handleRegister(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response= await axiosClient.post("/register",{name,email,password,role});
            
            const data=response.data;
            const user =data.user;
            const token = data.token;

            setAuthContext(token,user,role);

            if (user.role === 'provider') {
                navigate('/provider-dashboard'); // نرسل المزود للوحة التحكم
            } else {
                navigate('/'); // نرسل المستخدم العادي للرئيسية
            }
        } catch (err) {
            console.error("الخطأ الحقيقي هو:", err);
            // 5. التعامل مع الأخطاء
            if (err.response && err.response.status === 422) {
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
            <h2 style={{ textAlign: 'center', color: '#003366' }}>تسجيل حساب جديد</h2>
            
            {/* مكان عرض رسالة الخطأ الحمراء إن وجدت */}
            {error && <div style={{ backgroundColor: '#ffe6e6', color: '#cc0000', padding: '10px', borderRadius: '5px', marginBottom: '15px', textAlign: 'center' }}>
                {error}
            </div>}

            {/* ربطنا الدالة بالـ Form مباشرة */}
            <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>الاسم:</label>
                    <input 
                        type="text" 
                        required
                        value={name} // الربط بالمتغير
                        onChange={(e) => setName(e.target.value)} // تحديث المتغير عند الكتابة
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>

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
                <div style={{ marginBottom: '20px' }}>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">أريد حجز موعد (مستخدم)</option>
                        <option value="provider">أريد تقديم خدمة (طبيب/ملعب...)</option>
                    </select>

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
                    {loading ? 'جاري التحميل...' : 'تسجيل'}
                </button>
            </form>
        </div>
    );
}