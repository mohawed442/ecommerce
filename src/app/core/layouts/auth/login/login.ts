import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServices } from '../services/auth-services';
import { ValidationMassages } from '../../../../shared/components/validation-massages/validation-massages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ValidationMassages],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private _authServices = inject(AuthServices);
  private _router = inject(Router);
  apiError: string = '';

  loginAuth = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/(?=.*[A-Z])/), // حرف كبير واحد على الأقل
      Validators.pattern(/(?=.*[a-z])/), // حرف صغير واحد على الأقل
      Validators.pattern(/(?=.*[0-9])/), // رقم واحد على الأقل
      Validators.pattern(/(?=.*[@$!%*?&])/), // رمز خاص واحد على الأقل
    ]),
  });

  onClick() {
    console.log(this.loginAuth);

    this._authServices.login(this.loginAuth.value).subscribe({
      next: (res: any) => {
        this._authServices.setToken(res.token);
        this._router.navigate(['home']);
      },
      error: (err) => {
       this.apiError = err.error.message;
      },
    });
  }

  showPasswordBoolean: boolean = false;
  showPassword() {
    console.log(this.showPasswordBoolean);
    return (this.showPasswordBoolean = !this.showPasswordBoolean);
  }
}
