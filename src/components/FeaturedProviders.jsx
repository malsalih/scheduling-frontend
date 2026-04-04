export default function FeaturedProviders() {
    
    // بيانات تجريبية
    const providers = [
        { name: "د. أحمد خالد", title: "استشاري جراحة العظام والمفاصل", price: "250", rating: "4.9", tag: "متاح اليوم", image: "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=740" },
        { name: "ملاعب أرينا بادل", title: "ملاعب داخلية مكيفة بأحدث المواصفات", price: "180", rating: "4.9", tag: "عرض خاص", image: "https://img.freepik.com/free-vector/soccer-stadium-arena-field-green-grass-pattern-illuminated-by-spotlights_1284-53173.jpg?w=740" },
        { name: "سارة المنصور", title: "تصوير حفلات، مناسبات، وبورتريه احترافي", price: "1,200", rating: "5.0", tag: "الأكثر طلباً", image: "https://img.freepik.com/free-vector/photographer-concept-illustration_114360-3162.jpg?w=740" }
    ];

    return (
        <div className="w-full px-4 md:px-12 lg:px-24 py-16 bg-[#F8FAFC]" dir="rtl">
            
            {/* 1. رأس القسم (العنوان + رابط العرض) */}
            <div className="flex justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-primary">أبرز مقدمي الخدمات</h2>
                    <p className="text-neutral mt-2">نخبة من المتخصصين حازوا على أعلى التقييمات.</p>
                </div>
                <a href="#" className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-1">
                    عرض جميع المميزين <span>&lt;</span>
                </a>
            </div>

            {/* 2. شبكة البطاقات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {providers.map((provider, index) => (
                    
                    // الصندوق الرئيسي للبطاقة
                    <div key={index} className="bg-white group rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                        
                        {/* النصف العلوي: الصورة والشارات */}
                        {/* تذكر: ماذا نضع للأب لكي تطفو الشارات داخله بحرية؟ */}
                        <div className="h-56 relative">
                            <img src={provider.image} alt={provider.name} className="w-full group-hover:scale-105 ease-in-out duration-300 h-full object-cover" />
                            
                            {/* شارة التقييم (فوق يمين) */}
                            <div className="absolute  top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                <span className="text-yellow-400">★</span> {provider.rating}
                            </div>
                            
                            {/* شارة الحالة (أسفل يمين) */}
                            <div className="absolute bottom-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                                {provider.tag}
                            </div>
                        </div>

                        {/* النصف السفلي: النصوص والأزرار */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-1">{provider.name}</h3>
                            <p className="text-sm text-neutral mb-6">{provider.title}</p>
                            
                            {/* تذييل البطاقة (السعر والزر) */}
                            <div className="flex justify-between">
                                <div className="text-neutral text-sm">
                                    يبدأ من <span className="text-lg font-bold text-primary">{provider.price} ر.س</span>
                                </div>
                                <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
                                    احجز الآن
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}