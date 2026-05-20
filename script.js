// NUBESKETSH PRO - Core Engine
const tg = window.Telegram.WebApp;
tg.ready();

// 1. نظام التبديل بين التبويبات (مثل إنستغرام)
function switchView(view) {
    const container = document.getElementById('app-container');
    
    // هنا سنقوم لاحقاً بإضافة محتوى كل صفحة
    if(view === 'home') {
        container.innerHTML = "<h1>الرئيسية</h1><p>تصاميم الأعضاء ستظهر هنا...</p>";
    } else if(view === 'studio') {
        // هنا سنفتح صفحة الرسم (ibisPaint logic)
        container.innerHTML = "<h1>الاستوديو</h1><p>ابدأ برسم تصميمك الجديد...</p>";
    }
    // يمكننا إضافة الترتيب والرسائل بنفس الطريقة
}

// 2. نظام التحقق من المالكة (الأمن)
const OWNER_ID = 8421694319; 
const user = tg.initDataUnsafe.user;

if (user && user.id == OWNER_ID) {
    console.log("Welcome Owner - Admin Mode Active");
    // هنا سنضيف لاحقاً زر "لوحة التحكم" المخفي
}

// 3. إعدادات اللغة (بناءً على تليجرام)
const lang = tg.initDataUnsafe.user?.language_code || 'en';
console.log("Current Language:", lang);

// وظيفة فتح الإعدادات (ستضاف في التحديث القادم)
function openSettings() {
    alert("جارٍ فتح لوحة الإعدادات...");
}
