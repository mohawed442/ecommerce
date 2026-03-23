import { Injectable } from '@angular/core';

export interface ToastOptions {
  duration?: number;
  position?: 
    | 'top-left' | 'top-center' | 'top-right' 
    | 'center-left' | 'center-center' | 'center-right' 
    | 'bottom-left' | 'bottom-center' | 'bottom-right';
  title?: string;
}

@Injectable({ providedIn: 'root' })
export class Notification {
  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success', options: ToastOptions = {}) {
    const duration = options.duration || 3000;
    const position = options.position || 'top-right';
    const title = options.title || (type.charAt(0).toUpperCase() + type.slice(1));

    let container = document.getElementById(`toast-container-${position}`);
    if (!container) {
      container = document.createElement('div');
      container.id = `toast-container-${position}`;
      
      // هنا السحر كله: توزيع الـ 9 أماكن بـ Tailwind
      const posClasses = {
        'top-left': 'top-5 left-5 items-start',
        'top-center': 'top-5 left-1/2 -translate-x-1/2 items-center',
        'top-right': 'top-5 right-5 items-end',
        
        'center-left': 'top-1/2 left-5 -translate-y-1/2 items-start',
        'center-center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center',
        'center-right': 'top-1/2 right-5 -translate-y-1/2 items-end',
        
        'bottom-left': 'bottom-5 left-5 items-start',
        'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2 items-center',
        'bottom-right': 'bottom-5 right-5 items-end',
      };
      
      container.className = `fixed ${posClasses[position]} z-[100000] flex flex-col gap-3 w-full max-w-sm px-4 pointer-events-none`;
      document.body.appendChild(container);
    }

    const config = {
      success: { bg: 'bg-[#0aad0a]', icon: 'fa-solid fa-circle-check' },
      error: { bg: 'bg-red-600', icon: 'fa-solid fa-circle-xmark' },
      info: { bg: 'bg-blue-600', icon: 'fa-solid fa-circle-info' },
      warning: { bg: 'bg-orange-500', icon: 'fa-solid fa-triangle-exclamation' },
    };

    const theme = config[type];
    const toast = document.createElement('div');

    const animClass = position.includes('right') ? 'animate-slide-in-right' : 
                      position.includes('left') ? 'animate-slide-in-left' : 
                      position.includes('bottom') ? 'animate-slide-in-bottom' : 'animate-slide-in-top';

    toast.className = `group pointer-events-auto relative overflow-hidden flex items-start p-4 rounded-2xl shadow-2xl ${theme.bg} text-white ${animClass} cursor-pointer transition-all duration-300 hover:scale-[1.02] h-auto min-h-[80px] w-full`;

    toast.innerHTML = `
      <div class="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl animate-pulse">
         <i class="${theme.icon} text-2xl"></i>
      </div>
      <div class="ms-4 flex-1 flex flex-col justify-center min-w-0 text-left">
        <div class="text-[16px] font-black tracking-wide uppercase mb-1">${title}</div>
        <div class="text-[13px] font-medium opacity-90 break-words">${message}</div>
      </div>
      <button class="ms-2 opacity-40 hover:opacity-100 transition-opacity p-2 bg-black/10 rounded-xl">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
      <div class="absolute bottom-0 left-0 h-1.5 bg-white/30 transition-all ease-linear" style="width: 100%;" id="progress-bar"></div>
    `;

    container.appendChild(toast);

    const progressBar = toast.querySelector('#progress-bar') as HTMLElement;
    let startTime = Date.now();
    let remaining = duration;
    let animationId: any;

    const updateBar = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.max(0, 100 - (elapsed / duration) * 100);
      progressBar.style.width = `${progress}%`;
      if (elapsed < duration) animationId = requestAnimationFrame(updateBar);
      else remove();
    };

    const remove = () => {
      cancelAnimationFrame(animationId);
      toast.classList.add('opacity-0', 'scale-90', 'transition-all', 'duration-500');
      setTimeout(() => {
        toast.remove();
        if (container?.childElementCount === 0) container.remove();
      }, 500);
    };

    toast.onmouseenter = () => cancelAnimationFrame(animationId);
    toast.onmouseleave = () => { startTime = Date.now(); updateBar(); };
    toast.querySelector('button')?.addEventListener('click', (e) => { e.stopPropagation(); remove(); });
    animationId = requestAnimationFrame(updateBar);
  }
}