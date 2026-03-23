# 🔔 Advanced Dynamic Notification Engine for Angular
> **نظام إشعارات ذكي، تفاعلي، ومتعدد الأوضاع مبني بأحدث تقنيات الويب.**

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📝 مقدمة (Introduction)

في عالم تطبيقات الويب الحديثة، تعد **تجربة المستخدم (UX)** هي الفارق الجوهري بين التطبيق العادي والتطبيق الاحترافي. يقدم هذا المشروع **نظام إشعارات (Notification System)** متطوراً يتجاوز مجرد عرض الرسائل التقليدية. 

لقد تم بناء هذا المحرك ليكون **خفيفاً (Lightweight)**، **مرناً (Flexible)**، و **تفاعلياً بالكامل**. لا يقتصر دور النظام على إخبار المستخدم بما حدث فحسب، بل يمنحه القدرة على التفاعل مع التنبيه، التحكم في وقت بقائه، واختيار أنسب زاوية للظهور من بين **9 وضعيات استراتيجية** تغطي كامل مساحة الشاشة.

### 🌟 لماذا هذا النظام؟
* **تصميم Pixel-Perfect:** واجهة مستخدم بيضاء نقية مع ظلال ناعمة ولمسات ملونة هادئة تناسب الهويات البصرية العصرية.
* **ذكاء اصطناعي في التوزيع:** توزيع ذكي للإشعارات يضمن عدم تداخلها وسهولة قراءتها مهما كان عددها.
* **أداء فائق:** يعتمد على تقنية `requestAnimationFrame` لضمان سلاسة الحركة بنسبة 100% دون إجهاد معالج الجهاز.
* **تفاعل حيوي:** ميزة التوقف المؤقت (Pause on Hover) التي تمنح المستخدم السيطرة الكاملة على تدفق المعلومات.

--- 
# ## 🚀 Angular Notification System (The Ultimate Visual Guide)

نظام إشعارات احترافية مصمم خصيصاً لتطبيقات Angular الحديثة. يعتمد النظام على مبادئ **التبسيط (Minimalism)** و **المرونة (Flexibility)**، حيث يتكيف التصميم تلقائياً مع محتوى الرسالة وموقعها على الشاشة.

---

### 🎨 أولاً: الحالات الأربعة الأساسية (The 4 Core States)

يتم تميز كل حالة بصرياً عبر ثلاث عناصر: الأيقونة، اللون، وشريط الحالة الجانبي.

<div style="display: flex; flex-direction: column; gap: 15px; padding: 20px; background: #f9fafb; border-radius: 16px; border: 1px solid #e5e7eb;">

  <div style="background: white; padding: 14px 20px; border-radius: 14px; border-left: 5px solid #10b981; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 12px; max-width: 450px;">
    <span style="background: #ecfdf5; padding: 8px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
      <i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 18px;"></i>
    </span>
    <div style="flex: 1;">
      <p style="margin: 0; color: #065f46; font-size: 14px; font-weight: 800; font-family: sans-serif;">Success State</p>
      <p style="margin: 0; color: #374151; font-size: 13px; font-family: sans-serif;">تم حفظ التعديلات التي قمت بها بنجاح في النظام.</p>
    </div>
  </div>

  <div style="background: white; padding: 14px 20px; border-radius: 14px; border-left: 5px solid #f43f5e; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 12px; max-width: 450px;">
    <span style="background: #fff1f2; padding: 8px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
      <i class="fa-solid fa-circle-xmark" style="color: #f43f5e; font-size: 18px;"></i>
    </span>
    <div style="flex: 1;">
      <p style="margin: 0; color: #9f1239; font-size: 14px; font-weight: 800; font-family: sans-serif;">Error State</p>
      <p style="margin: 0; color: #374151; font-size: 13px; font-family: sans-serif;">عفواً، لم نتمكن من الوصول إلى خادم البيانات حالياً.</p>
    </div>
  </div>

  <div style="background: white; padding: 14px 20px; border-radius: 14px; border-left: 5px solid #f59e0b; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 12px; max-width: 450px;">
    <span style="background: #fffbeb; padding: 8px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
      <i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b; font-size: 18px;"></i>
    </span>
    <div style="flex: 1;">
      <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 800; font-family: sans-serif;">Warning State</p>
      <p style="margin: 0; color: #374151; font-size: 13px; font-family: sans-serif;">تحذير: مساحة التخزين المتاحة قاربت على الانتهاء.</p>
    </div>
  </div>

  <div style="background: white; padding: 14px 20px; border-radius: 14px; border-left: 5px solid #3b82f6; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 12px; max-width: 450px;">
    <span style="background: #eff6ff; padding: 8px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
      <i class="fa-solid fa-circle-info" style="color: #3b82f6; font-size: 18px;"></i>
    </span>
    <div style="flex: 1;">
      <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 800; font-family: sans-serif;">Information State</p>
      <p style="margin: 0; color: #374151; font-size: 13px; font-family: sans-serif;">يوجد تحديث جديد متاح للتطبيق، يرجى إعادة التشغيل.</p>
    </div>
  </div>

</div>

---

### 💎 ثانياً: ميزة الأزرار التفاعلية (Interactive Actions)

تسمح الخدمة بإضافة زر "أكشن" سريع للمستخدم. يتم وضع الزر بشكل استراتيجي ليناسب تدفق العين ويسهل الضغط عليه.

#### مثال لحالة "نجاح" مع زر مخصص:

<div style="background: white; padding: 16px 24px; border-radius: 16px; border-left: 6px solid #10b981; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; align-items: center; max-width: 500px; border: 1px solid #f1f5f9;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 20px;"></i>
    <span style="color: #1e293b; font-size: 14px; font-weight: 700; font-family: sans-serif;">تم إضافة المنتج بنجاح!</span>
  </div>
  <div style="background: #f0fdf4; padding: 6px 12px; border-radius: 8px; cursor: pointer; border: 1px solid #bbf7d0;">
    <span style="color: #166534; font-size: 12px; font-weight: 900; font-family: sans-serif; text-transform: uppercase;">عرض السلة</span>
  </div>
</div>

---

### 🧩 ثالثاً: هندسة وضعية المنتصف (The Center-Grid Layout)

عند تفعيل أحد أوضاع المنتصف (`top-center`, `center-center`, `bottom-center`)، تتحول هندسة الإشعار لتصبح متماثلة (Symmetrical):
1. **Vertical Accent:** ينتقل الشريط الملون من اليسار إلى الأعلى ليحيط بالعنصر من فوق.
2. **Text Centering:** يتم محاذاة كافة النصوص والأيقونات في السنتر تماماً لتجنب الثقل البصري الجانبي.

<div style="display: flex; justify-content: center; padding: 30px; background: #fdfdfd; border: 1px dashed #cbd5e1; border-radius: 12px;">
  <div style="background: white; padding: 20px; border-radius: 16px; border-top: 5px solid #10b981; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; gap: 10px; width: 300px; text-align: center;">
    <div style="background: #ecfdf5; width: 45px; height: 45px; border-radius: 50%; display: flex; items-center; justify-content: center;">
      <i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 22px;"></i>
    </div>
    <span style="color: #1e293b; font-size: 14px; font-weight: 800; font-family: sans-serif;">تم التحديث في المنتصف</span>
    <p style="margin: 0; color: #64748b; font-size: 12px; font-family: sans-serif;">التصميم يتكيف تلقائياً ليكون مريحاً في وضعيات السنتر.</p>
  </div>
</div>

---

### ⏱️ رابعاً: تشريح شريط التقدم والتفاعل (Progress & Interaction)

الإشعار لا يختفي بشكل عشوائي، بل يعتمد على نظام توقيت مرئي للمستخدم:

1. **The Timer Bar:** شريط نحيف جداً أسفل الإشعار يقل تدريجياً.
2. **Pause on Hover:** عند وضع الماوس على التنبيه، يتوقف العداد فوراً.

<div style="position: relative; background: white; padding: 12px 16px; border-radius: 12px; border-left: 4px solid #3b82f6; box-shadow: 0 4px 10px rgba(0,0,0,0.05); max-width: 300px; overflow: hidden;">
  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
     <i class="fa-solid fa-circle-info" style="color: #3b82f6;"></i>
     <span style="font-size: 12px; color: #334155; font-weight: 600;">يختفي بعد قليل...</span>
  </div>
  <div style="position: absolute; bottom: 0; left: 0; height: 3px; width: 60%; background: #3b82f6; opacity: 0.5;"></div>
  <div style="position: absolute; bottom: 0; left: 0; height: 3px; width: 100%; background: #eff6ff;"></div>
</div>

---

### 📍 خامساً: شبكة المواقع التسعة (9-Position Logic)

تدعم الخدمة توزيع الإشعارات عبر كامل مساحة الشاشة في 9 نقاط رئيسية:

| المواقع العلوية | المواقع الوسطى | المواقع السفلية |
| :--- | :--- | :--- |
| `top-left` | `center-left` | `bottom-left` |
| `top-center` | `center-center` | `bottom-center` |
| `top-right` | `center-right` | `bottom-right` |

---

### 💻 سادساً: المرجع السريع (API Summary)

| الإعداد (Option) | النوع (Type) | الوصف |
| :--- | :--- | :--- |
| `duration` | `number` | يتحكم في سرعة تحرك شريط التقدم. |
| `position` | `string` | يحدد الحاوية المناسبة والأنيميشن الخاص بها. |
| `action` | `object` | يضيف الزر التفاعلي والوظيفة المرتبطة به. |

---