export default function DoctorProfile() {
  const stats = [
    { title: "سنوات الخبرة", value: "+15", icon: "💼" },
    { title: "مرضى سعداء", value: "+5000", icon: "👥" },
    { title: "شهادات", value: "8", icon: "🏅" },
    { title: "نسبة الرضا", value: "98%", icon: "😊" },
  ];

  const gallery = [
    "https://img.freepik.com/free-photo/modern-hospital-building_1127-2415.jpg?w=740", // الصورة الطويلة
    "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740", // الصورة الصغيرة 1
    "https://img.freepik.com/free-photo/empty-clinic-room-with-medical-equipment_1303-31682.jpg?w=740", // الصورة الصغيرة 2
  ];

  const bookingDays = [
    { name: "خ", number: "1", state: "normal" },
    { name: "ج", number: "2", state: "active" }, // اليوم المحدد (أزرق داكن)
    { name: "س", number: "3", state: "normal" },
    { name: "أ", number: "4", state: "normal" },
    { name: "ا", number: "5", state: "today" }, // اليوم الحالي (أخضر)
  ];

  const bookingTimes = [
    { time: "09:00 ص", state: "available" },
    { time: "10:30 ص", state: "selected" }, // الوقت المختار (أخضر)
    { time: "11:15 ص", state: "available" },
    { time: "01:00 م", state: "available" },
    { time: "02:30 م", state: "unavailable" }, // غير متاح (رمادي باهت)
    { time: "04:00 م", state: "available" },
  ];
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-10 bg-[#F8FAFC]" dir="rtl">
      {/* 1. البانر العلوي (Hero Profile) */}
      {/* استخدمنا relative لكي نتمكن من إخراج الصورة من حدوده */}
      <div className="w-full bg-primary rounded-3xl h-48 relative mb-20 flex items-center px-8 md:px-48">
        {/* معلومات الطبيب */}
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">
            د. إبراهيم محمود
          </h1>
          <p className="text-secondary text-sm mb-4">
            استشاري جراحة العظام والطب الرياضي
          </p>
          <div className="flex gap-4 text-xs font-bold">
            <span className="bg-[#2c478e] text-white px-3 py-1 rounded-full border border-white/20">
              ⭐ 4.9 (+120 تقييم)
            </span>
            <span className="bg-[#2c478e] text-white px-3 py-1 rounded-full border border-white/20">
              📍 الرياض، المملكة العربية السعودية
            </span>
          </div>
        </div>

        {/* صورة الطبيب المربعة المتداخلة (Floating Avatar) */}
        <div className="absolute -bottom-12 right-8 w-40 h-40 bg-white rounded-2xl p-1 shadow-lg">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim"
            alt="Doctor"
            className="w-full h-full rounded-xl bg-blue-50 object-cover"
          />
          {/* علامة موثق الخضراء */}
          <div className="absolute -bottom-2 -left-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white">
            ✔ موثق
          </div>
        </div>
      </div>

      {/* 2. الجسد (العمود الأيمن والعمود الأيسر) */}
      {/* التحدي هنا: اجعلها شبكة من عمود واحد في الجوال، و 3 أعمدة في الشاشات الكبيرة lg */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* القسم الأيمن (عن الدكتور، الإحصائيات، الصور) */}
        {/* اجعله يأخذ عمودين من أصل 3 في الشاشات الكبيرة */}
        <div className="lg:col-span-2 space-y-8">
          {" "}
          {/* space-y-8 تضع مسافة عمودية بين كل الأقسام داخله */}
          {/* 1. نبذة عن الدكتور */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-4">عن الدكتور</h2>
            <p className="text-neutral leading-relaxed">
              دكتور إبراهيم محمود هو أحد أبرز الكفاءات الوطنية في جراحة العظام
              والإصابات الرياضية. يمتلك خبرة تتجاوز الـ 15 عاماً في علاج حالات
              المفاصل والمنظار الجراحي. تلقى تدريبه في أفضل المراكز الطبية
              العالمية، ويحرص دائماً على تطبيق أحدث البروتوكولات العلاجية لضمان
              سرعة تعافي الرياضيين وعودتهم للملاعب في أفضل حال.
            </p>

            {/* شبكة الإحصائيات (Grid الداخلي) */}
            {/* التحدي: اجعلها عمودين في الموبايل، و 4 أعمدة في الشاشات الكبيرة md */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                // تصميم المربع الواحد
                // التحدي: خلفية زرقاء فاتحة جداً (bg-blue-50)، زوايا دائرية 2xl، ومحتوى بالمنتصف
                <div
                  key={index}
                  className="bg-blue-50 rounded-3xl p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
                >
                  <div className="text-3xl mb-2 text-primary">{stat.icon}</div>
                  {/* التحدي: اجعل الرقم كبيراً، عريضاً، ولونه أساسي (primary) */}
                  <div className="text-primary font-bold text-xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral mt-1 font-medium">
                    {stat.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 2. معرض الصور */}
          <div className="mt-8">
            {/* رأس المعرض */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-primary">معرض الصور</h3>
              <a
                href="#"
                className="text-sm font-bold text-primary flex items-center gap-1 hover:text-secondary transition-colors"
              >
                عرض الكل <span>←</span>
              </a>
            </div>

            {/* شبكة الصور */}
            {/* التحدي: اجعلها grid من عمودين، وضع فجوة gap-4، وحدد ارتفاعاً ثابتاً للشبكة مثل h-[400px] */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[400px]">
              {/* الصورة الأولى (الطويلة) */}
              {/* التحدي: اجعلها تندمج لأسفل بمقدار صفين row-span-2، وحواف دائرية 3xl */}
              <div className="rounded-3xl row-span-2 overflow-hidden group cursor-pointer">
                <img
                  src={gallery[0]}
                  alt="Clinic 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* الصورة الثانية (العلوية اليسرى) */}
              {/* التحدي: حواف دائرية 3xl */}
              <div className="rounded-3xl overflow-hidden group cursor-pointer">
                <img
                  src={gallery[1]}
                  alt="Clinic 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* الصورة الثالثة (السفلية اليسرى) */}
              {/* التحدي: حواف دائرية 3xl */}
              <div className="rounded-3xl overflow-hidden group cursor-pointer">
                <img
                  src={gallery[2]}
                  alt="Clinic 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          {/* سنضيف قسم الصور هنا في التحدي القادم */}
        </div>

        {/* القسم الأيسر (ويدجت الحجز) */}
        {/* اجعله يأخذ عموداً واحداً فقط */}
        {/* القسم الأيسر (ويدجت الحجز) */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 sticky top-10">
            {/* 1. رأس الويدجت */}
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              📅 احجز موعدك الآن
            </h3>

            {/* 2. شريط الأيام */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4 text-primary font-bold">
                <button>&lt;</button>
                <span>سبتمبر 2024</span>
                <button>&gt;</button>
              </div>

              <div className="flex justify-between">
                {bookingDays.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-neutral text-sm">{day.name}</span>
                    {/* التحدي: اكتب شرطاً يغير لون الدائرة بناءً على day.state */}
                    {/* إذا كان active: خلفية primary، إذا كان today: خلفية secondary، غير ذلك: شفاف */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        day.state === "active"
                          ? "bg-primary text-white"
                          : day.state === "today"
                            ? "..."
                            : "..."
                      }`}
                    >
                      {day.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. شبكة الأوقات */}
            <div className="mb-8">
              <p className="text-sm font-bold text-primary mb-4">
                الأوقات المتاحة لهذا اليوم
              </p>
              {/* التحدي: استخدم grid من عمودين gap-3 للأوقات */}
              <div className="grid grid-cols-2 gap-3">
                {bookingTimes.map((slot, i) => (
                  <button
                    key={i}
                    disabled={slot.state === "unavailable"}
                    className={`py-2 rounded-full text-sm font-bold border transition-all ${
                      slot.state === "selected"
                        ? "bg-secondary border-secondary text-white"
                        : slot.state === "unavailable"
                          ? "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white border-neutral text-primary hover:border-primary"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. زر التأكيد */}
            {/* التحدي: زر أزرق داكن (primary) عريض بالكامل، وحواف دائرية كاملة (pill) */}
            <button className="bg-primary w-full text-white rounded-full py-4 text-xl font-bold">
              تأكيد الحجز ←
            </button>

            {/* 5. تفاصيل الرسوم (التذييل) */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-primary">
                  💵
                </div>
                <div>
                  <p className="text-xs text-neutral">رسوم الكشفية</p>
                  <p className="font-bold text-primary">250 ريال سعودي</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-secondary">
                  ⏳
                </div>
                <div>
                  <p className="text-xs text-neutral">مدة الجلسة</p>
                  <p className="font-bold text-primary">45 دقيقة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
