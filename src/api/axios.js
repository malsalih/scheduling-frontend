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

export default axiosClient;