export default function HeroSection(){
    return(

    <div className="w-full px-4 md:px-12 lg:px-24 pt-8" dir="rtl">
            
            {/* هذا هو المستطيل الأزرق الفعلي */}
            <div className="w-full bg-primary rounded-3xl relative overflow-hidden flex items-center min-h-[500px]">
                <div  className="w-full lg:w-1/2 p-12">
                    <h1 className="text-white text-5xl font-bold">احجز موعدك القادم</h1>
                    <p className="text-secondary text-5xl font-bold pt-6">في ثوانٍ</p>
                    <p className="pt-6 text-neutral">المنصة الأكثر رقيًا للوصول إلى نخبة الخبراء والخدمات في مدينتك. دقة في المواعيد، جودة في الخدمة، وسهولة في الحجز.</p>
                    <div className="rounded-full w-full gap-2 flex justify-between items-center bg-[#2c478e] border-neutral border-[1px] min-h-16 my-12 p-2">
                        <div className="rounded-full flex items-center  flex-1 bg-white border-neutral border-[1px] ">
                            <span className="p-2">🔍</span>
                            <input className="bg-transparent w-full outline-none p-4" placeholder="ما الخدمة التي تبحث عنها؟"></input>
                            

                        </div>
                        <div className="rounded-full flex items-center w-1/3 bg-white border-neutral border-[1px] ">
                            <span className="p-2">📍</span>
                            <input className="bg-transparent outline-none p-4" placeholder="المدينة"></input>
                            

                        </div>

                        <div className="rounded-full text-white font-bold  bg-secondary border-neutral border-[1px] ">
                            <button className="bg-transparent w-full  outline-none p-4" >ابحث الان</button>
                            

                        </div>

                    </div>
                    <div className="flex gap-4">
                        <button className="text-white rounded-full bg-[#2c478e] px-4 py-1 text-xs border-white/30 border-[1px]">
                            أطباء مميزون
                        </button>
                        <button className="text-white rounded-full bg-[#2c478e] px-4 py-1 text-xs border-white/30 border-[1px]">
                           ملاعب باديل
                        </button>
                        <button className="text-white rounded-full bg-[#2c478e] px-4 py-1 text-xs border-white/30 border-[1px]">
                           مصوري حفلات
                        </button>
                    </div>
                </div>
                <div className="relative hidden lg:flex w-1/2 justify-center items-end h-full">

                    <img 
                        src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=740" 
                        alt="Doctor" 
                        className="h-[450px] rounded-xl object-contain" 
                    />
                    <div className="absolute px-6 py-3 -bottom-3 flex gap-4  right-1/4 rounded-full shadow-lg bg-white">
                        <div className="bg-secondary rounded-full p-4 ">
                            ⚡

                        </div>
                        <div>
                            <p className="text-gray-500">حجز فوري متاح</p>
                            <h1 className="text-primary font-bold">اكثر من 500 مزود خدمة</h1>
                        </div>

                    </div>
                </div>
                
            </div>

            
        </div>
    );
};