/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // قمنا بتعريف ألوانك الخاصة هنا لكي نستخدمها بسهولة في أي مكان
        primary: "#1E3A8A",   // الأزرق الداكن (الأساسي)
        secondary: "#10B981", // الأخضر الفاتح (الثانوي - للأزرار والنجاح)
        tertiary: "#6E2C00",  // البني/البرتقالي 
        neutral: "#94A3B8",   // الرمادي (للنصوص الثانوية والحدود)
        background: "#F8FAFC", // لون الخلفية الفاتح جداً للموقع
      },
      fontFamily: {
        // يمكنك لاحقاً إضافة اسم خط عربي هنا مثل Tajawal أو Cairo
        sans: ['system-ui', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}