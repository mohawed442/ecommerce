import { Component, Input, } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'validation-massages',
  imports: [],
  templateUrl: './validation-massages.html',
  styleUrl: './validation-massages.css',
})
export class ValidationMassages {

  @Input() controls!: AbstractControl | null;

}
