export default function Categories(){


    const categoriesList = [
        { title: "الرعاية الطبية", desc: "أطباء، عيادات، ومراكز متخصصة بأعلى المعايير.", icon: "👨‍⚕️" },
        { title: "الملاعب الرياضية", desc: "ملاعب مجهزة لكرة القدم، وتنس، وبادل جاهزة لمباراتك القادمة.", icon: "⚽" },
        { title: "المصورون المحترفون", desc: "توثيق لحظاتك الخاصة بعدسات فنانين مبدعين.", icon: "📸" }
    ];


    return(
        
            <div className="w-full px-4 md:px-12 lg:px-24 py-16" dir="rtl">
            
            {/* عنوان القسم */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-primary">تصفح حسب الفئة</h2>
                <p className="text-neutral mt-2">كل ما تحتاجه في مكان واحد.</p>
            </div>

            {/* شبكة البطاقات (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* طباعة البطاقات باستخدام Map */}
                {categoriesList.map((cat, index) => (
                    
                    // تصميم بطاقة واحدة
                    <div key={index} className="bg-white group rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md ease-in-out duration-300 transition-all hover:-translate-y-2 hover:bg-primary cursor-pointer">
                        
                        {/* الأيقونة */}
                        <div className="text-4xl flex justify-center w-full p-4   mb-4">
                            <div className="p-4  rounded-full w-min items-center bg-white">
                                {cat.icon}
                            </div>
                        </div>
                        
                        {/* العنوان الوصفي */}
                        <h3 className="text-xl group-hover:text-white font-bold text-primary mb-2">{cat.title}</h3>
                        <p className="text-sm text-neutral mb-6">{cat.desc}</p>
                        
                        {/* زر استعراض الكل */}
                        <button className="text-primary group-hover:text-secondary font-bold text-sm flex items-center justify-center mx-auto gap-2">
                            استعرض الكل <span>←</span>
                        </button>
                    </div>

                ))}

            </div>
        </div>
        
    )
}