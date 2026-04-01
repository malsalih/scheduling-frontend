export default function HeroSection(){
    return(

    <div className="w-full px-4 md:px-12 lg:px-24 pt-8" dir="rtl">
            
            {/* هذا هو المستطيل الأزرق الفعلي */}
            <div className="w-full bg-primary rounded-3xl relative overflow-hidden flex items-center min-h-[500px]">
                <div  className="w-full lg:w-1/2 p-12">
                    <h1 className="text-white text-5xl font-bold">احجز موعدك القادم</h1>
                    <p className="text-secondary text-5xl font-bold pt-6">في ثوانٍ</p>
                    <p className="pt-6 text-neutral">المنصة الأكثر رقيًا للوصول إلى نخبة الخبراء والخدمات في مدينتك. دقة في المواعيد، جودة في الخدمة، وسهولة في الحجز.</p>
                    <div className="rounded-full w-full flex justify-between items-center bg-[#2c478e] border-neutral border-[1px] min-h-16 my-12 p-2">
                        <div className="rounded-full  w-1/2 bg-white border-neutral border-[1px] ">
                            <input className="bg-transparent  outline-none p-4" placeholder="ما الخدمة التي تبحث عنها؟"></input>
                            

                        </div>
                        <div className="rounded-full mr-2  w-1/3 bg-white border-neutral border-[1px] ">
                            <input className="bg-transparent outline-none p-4" placeholder="المدينة"></input>
                            

                        </div>

                        <div className="rounded-full mr-2 w-1/3 bg-secondary border-neutral border-[1px] ">
                            <button className="bg-transparent w-full  outline-none p-4" >ابحث الان</button>
                            

                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
    );
};