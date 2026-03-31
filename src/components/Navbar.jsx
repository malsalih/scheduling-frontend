export default function Navbar() {
  return (
    // الصندوق الرئيسي للشريط العلوي
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white border-b border-gray-100">
      
      {/* 1. الشعار (اللوجو) */}
      <div className="text-primary font-bold text-xl tracking-wide">
        The Service Editorial
      </div>

      {/* 2. الروابط في المنتصف */}
      {/* space-x-8: تضع مسافة بين كل رابط والذي يليه */}
      <div className="hidden md:flex space-x-8 rtl:space-x-reverse text-sm font-medium text-neutral">
        <a href="#" className="hover:text-primary transition-colors">Photographers</a>
        <a href="#" className="hover:text-primary transition-colors">Sports Fields</a>
        {/* الرابط النشط نعطيه اللون الأساسي وخط سفلي */}
        <a href="#" className="text-primary border-b-2 border-primary pb-1">Doctors</a>
      </div>

      {/* 3. منطقة الأيقونات (اليمين) */}
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        {/* دائرة وهمية تمثل أيقونة التنبيهات */}
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          🔔
        </div>
        {/* دائرة وهمية تمثل صورة المستخدم */}
        <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-primary overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
        </div>
      </div>

    </nav>
  );
}