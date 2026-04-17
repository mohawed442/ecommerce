import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Loading } from './shared/components/loading/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet ,Loading],
})
export class App {
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      import('flowbite').then((m) => m.initFlowbite());
    }
  }
}
