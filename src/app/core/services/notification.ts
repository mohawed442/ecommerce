import { Injectable } from '@angular/core';

export interface ToastOptions {
  duration?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  action?: { label: string; callback: () => void };
}

@Injectable({ providedIn: 'root' })
export class Notification {
  show(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'success',
    options: ToastOptions = {},
  ) {
    const duration = options.duration || 3000;
    const position = options.position || 'top-right';

    let container = document.getElementById(`toast-container-${position}`);
    if (!container) {
      container = document.createElement('div');
      container.id = `toast-container-${position}`;

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

      container.className = `fixed ${posClasses[position]} z-[1000000] flex flex-col gap-2 w-full max-w-[350px] px-4 pointer-events-none`;
      document.body.appendChild(container);
    }

    const config = {
      success: {
        color: 'text-emerald-500',
        border: 'border-emerald-500',
        icon: 'fa-circle-check',
        bg: 'bg-emerald-500',
      },
      error: {
        color: 'text-rose-500',
        border: 'border-rose-500',
        icon: 'fa-circle-xmark',
        bg: 'bg-rose-500',
      },
      info: {
        color: 'text-blue-500',
        border: 'border-blue-500',
        icon: 'fa-circle-info',
        bg: 'bg-blue-500',
      },
      warning: {
        color: 'text-amber-500',
        border: 'border-amber-500',
        icon: 'fa-triangle-exclamation',
        bg: 'bg-amber-500',
      },
    };

    const theme = config[type];
    const toast = document.createElement('div');

    const animClass = position.includes('right')
      ? 'animate-slide-in-right'
      : position.includes('left')
        ? 'animate-slide-in-left'
        : position.includes('bottom')
          ? 'animate-slide-in-bottom'
          : 'animate-slide-in-top';

    toast.className = `group pointer-events-auto relative flex flex-col p-4 rounded-xl bg-white border-l-4 ${theme.border} shadow-lg ${animClass} transition-all duration-300 hover:translate-y-[-2px] cursor-pointer`;

    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <i class="fa-solid ${theme.icon} ${theme.color} text-lg"></i>
        <div class="flex-1 min-w-0">
          <p class="text-[13px] font-semibold text-slate-700 leading-snug">${message}</p>
        </div>
        ${
          options.action
            ? `
          <button class="action-btn text-[12px] font-bold ${theme.color} hover:underline whitespace-nowrap ms-2 cursor-pointer p-1">
            ${options.action.label}
          </button>
        `
            : ''
        }
        <button class="close-btn text-slate-300 hover:text-slate-500 transition-colors ms-1 cursor-pointer p-1">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>
      <div class="absolute bottom-0 left-0 h-[2px] bg-slate-100 w-full overflow-hidden">
        <div id="p-bar" class="h-full ${theme.bg} opacity-40 transition-all ease-linear" style="width: 100%;"></div>
      </div>
    `;

    container.appendChild(toast);

    const pBar = toast.querySelector('#p-bar') as HTMLElement;
    let startTime = Date.now();
    let remaining = duration;
    let animationId: any;

    const updateBar = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.max(0, 100 - (elapsed / remaining) * 100);
      pBar.style.width = `${progress}%`;

      if (elapsed < remaining) {
        animationId = requestAnimationFrame(updateBar);
      } else {
        remove();
      }
    };

    const remove = () => {
      cancelAnimationFrame(animationId);
      toast.classList.add('opacity-0', 'scale-95', 'duration-300');
      setTimeout(() => {
        toast.remove();
        if (container?.childElementCount === 0) container.remove();
      }, 300);
    };

    toast.onmouseenter = () => {
      cancelAnimationFrame(animationId);
      remaining -= Date.now() - startTime;
    };

    toast.onmouseleave = () => {
      startTime = Date.now();
      updateBar();
    };

    if (options.action) {
      toast.querySelector('.action-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        options.action?.callback();
        remove();
      });
    }

    toast.querySelector('.close-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      remove();
    });

    animationId = requestAnimationFrame(updateBar);
  }
}
