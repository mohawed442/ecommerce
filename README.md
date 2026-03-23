# 🔔 Advanced Angular Notification Engine
> **نظام إشعارات ذكي، تفاعلي، ومتعدد الأوضاع (9-Positions) مبني بـ Angular و Tailwind CSS.**

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📝 مقدمة (Introduction)
محرك إشعارات متطور مصمم لتقديم تجربة مستخدم (UX) استثنائية. يتميز بخفة الوزن، وتعدد وضعيات الظهور، مع نظام توقيت ذكي يتفاعل مع حركة المستخدم (Pause on Hover).

### ✨ المميزات الرئيسية:
* 🎯 **9 وضعيات ظهور:** تغطية كاملة لجميع زوايا ومنتصف الشاشة.
* ⏸️ **توقف ذكي (Pause on Hover):** يتوقف المؤقت تلقائياً عند مرور الماوس.
* ⚡ **أداء فائق:** يعتمد على `requestAnimationFrame` لسلاسة 60fps.
* 🧹 **تنظيف تلقائي:** مسح ذكي لعناصر الـ DOM لتوفير الذاكرة.

---

## 🎨 الحالات الأربعة الأساسية (Visual States)

| الحالة | المعاينة البصرية (Visual Preview) | النوع (Type) | اللون |
| :--- | :--- | :--- | :--- |
| **Success** | ![#10b981](https://img.shields.io/badge/🟢-SUCCESS-10b981?style=flat-square) | `'success'` | Emerald-500 |
| **Error** | ![#f43f5e](https://img.shields.io/badge/🔴-ERROR-f43f5e?style=flat-square) | `'error'` | Rose-500 |
| **Warning** | ![#f59e0b](https://img.shields.io/badge/🟠-WARNING-f59e0b?style=flat-square) | `'warning'` | Amber-500 |
| **Info** | ![#3b82f6](https://img.shields.io/badge/🔵-INFO-3b82f6?style=flat-square) | `'info'` | Blue-500 |

---

## 📍 شبكة التوزيع (9-Position Grid)

| ↖️ `top-left` | ⬆️ `top-center` | ↗️ `top-right` |
| :--- | :--- | :--- |
| ⬅️ `center-left` | ↔️ **`center-center`** | ➡️ `center-right` |
| ↙️ `bottom-left` | ⬇️ `bottom-center` | ↘️ `bottom-right` |

---

## 🧩 ذكاء التصميم (Design Intelligence)

### 1. وضعية المنتصف (Center Mode)
يتغير الهيكل بصرياً عند السنتر لضمان التوازن: **Border-Top** بدلاً من الجانب مع توسيط كامل للمحتوى.

```diff
+ [--------------------------------------]
+ |           ✅ SUCCESS STATE           |
+ |      Updated in Center Position      |
+ [--------------------------------------]
