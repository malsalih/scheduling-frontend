// src/api/axios.js
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api', // رابط خادم لارافيل
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // السطر التالي مهم جداً لاحقاً إذا استخدمنا Sanctum للمصادقة وحفظ الـ Cookies
    withCredentials: true, 
});


// 2. اعتراض الطلب (قبل الذهاب إلى لارافيل)
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN'); // جلب المفتاح من الخزنة
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // إلصاق المفتاح في الترويسة
    }
    return config; // السماح للطلب بالخروج
});

// 3. اعتراض الرد (عند العودة من لارافيل)
axiosClient.interceptors.response.use(
    (response) => {
        return response; // إذا كان الرد ناجحاً، مرره كما هو
    },
    (error) => {
        try {
            const { response } = error;
            // 401 تعني Unauthorized (غير مصرح لك أو التوكن انتهى)
            if (response && response.status === 401) {
                localStorage.removeItem('ACCESS_TOKEN');
                localStorage.removeItem('USER');
                localStorage.removeItem('ROLE');
                // إعادة توجيه المستخدم لصفحة الدخول (اختياري)
                window.location.href = '/login'; 
            }
        } catch (e) {
            console.error(e);
        }
        throw error; // رمي الخطأ لتتعامل معه الصفحة (مثلاً لإظهار رسالة حمراء)
    }
);

export default axiosClient;