import { Component } from '@angular/core';
import { LoadingServices } from '../../../core/services/loading-services';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-loading',
  imports: [AsyncPipe],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading {
  constructor(public loadingService: LoadingServices) {}
}
