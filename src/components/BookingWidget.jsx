import { useState } from 'react';
import axiosClient from '../api/axios';

export default function BookingWidget({ serviceType = 'doctor', serviceId = 1 }) {
    // إدارة الحالة (State Management)
    const [selectedDate, setSelectedDate] = useState('');
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    // دالة فحص التوافر عند تغيير التاريخ
    const fetchAvailability = async (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // إعادة ضبط الوقت المختار سابقاً
        if (!date) return;

        setLoading(true);
        setMessage(null);
        setSlots([]);

        try {
            // تخاطب React مع Laravel API
            const response = await axiosClient.get('/availability', {
                params: {
                    type: serviceType,
                    id: serviceId,
                    date: date
                }
            });

            if (response.data.available && response.data.type === 'fixed_slots') {
                setSlots(response.data.slots);
            } else {
                setMessage(response.data.message || 'لا توجد أوقات متاحة في هذا اليوم.');
            }
        } catch (error) {
            setMessage('حدث خطأ أثناء جلب البيانات من الخادم.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>احجز موعدك الآن</h2>
            
            {/* 1. اختيار التاريخ */}
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>اختر التاريخ:</label>
                <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => fetchAvailability(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>

            {/* 2. حالة التحميل */}
            {loading && <p style={{ textAlign: 'center', color: '#0066cc' }}>جاري البحث عن الأوقات المتاحة...</p>}

            {/* 3. رسائل الخطأ أو الإجازات */}
            {message && <p style={{ textAlign: 'center', color: '#cc0000', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '5px' }}>{message}</p>}

            {/* 4. عرض الأزرار (الأوقات المتاحة) */}
            {slots.length > 0 && (
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>الأوقات المتاحة:</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {slots.map((slot, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedTime(slot.start)}
                                style={{
                                    padding: '10px 15px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedTime === slot.start ? '#28a745' : '#007bff',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    transition: '0.3s'
                                }}
                            >
                                {slot.start}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* 5. زر التأكيد النهائي */}
            {selectedTime && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <p>لقد اخترت الساعة: <strong>{selectedTime}</strong></p>
                    <button style={{ padding: '12px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', width: '100%' }}>
                        تأكيد الحجز
                    </button>
                </div>
            )}
        </div>
    );
}