import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'order/:id',
    renderMode: RenderMode.Server // هذا السطر يخبر أنجلر: "لا تحاول عمل Prerender لهذه الصفحة، اتركها للسيرفر"
  },
  {
    path: 'product-details/:id',
    renderMode: RenderMode.Server, // أخبر أنجلر أن هذه الصفحة يتم رندرها على السيرفر فقط ولا يحتاج لعمل Prerender لها وقت الـ Build
  },
  {
    path: 'category/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
