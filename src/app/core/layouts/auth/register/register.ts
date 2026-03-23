import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthServices } from '../services/auth-services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValidationMassages } from '../../../../shared/components/validation-massages/validation-massages';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ValidationMassages],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private _authServices = inject(AuthServices);
  private _router = inject(Router);

  isLoading: boolean = false;
  apiError: string = '';

  passwordMatchValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password')?.value;
    const rePassword = control.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  };

  registerForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/(?=.*[A-Z])/), // حرف كبير واحد على الأقل
        Validators.pattern(/(?=.*[a-z])/), // حرف صغير واحد على الأقل
        Validators.pattern(/(?=.*[0-9])/), // رقم واحد على الأقل
        Validators.pattern(/(?=.*[@$!%*?&])/), // رمز خاص واحد على الأقل
      ]),
      rePassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    },
    { validators: this.passwordMatchValidator },
  );

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this._authServices.addUser(this.registerForm.getRawValue()).subscribe({
      next: (res: any) => {
        console.log('Success:', res);
        if (res.message === 'success') {

          this._authServices.setToken(res.token);
          this._router.navigate(['home']);
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.apiError = err.error.message;
      },
    });
  }

  showPasswordBoolean: boolean = false;
  showRePasswordBoolean: boolean = false;

  showPassword(p: string) {
    if (p == 'password') {
      console.log(this.showPasswordBoolean);

      return (this.showPasswordBoolean = !this.showPasswordBoolean);
    }
    console.log(this.showRePasswordBoolean);
    return (this.showRePasswordBoolean = !this.showRePasswordBoolean);
  }
}
