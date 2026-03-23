import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  loadFlowbite(callback: (flowbite: any) => void) {

    if (isPlatformBrowser(this.platformId)) {

      import('flowbite').then((flowbite) => {
        callback(flowbite);
      });

    }
  }
}