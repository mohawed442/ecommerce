import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core'; // أضفنا OnInit هنا
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order-service';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { Notification } from '../../../../core/services/notification';

@Component({
  selector: 'app-order-cash',
  standalone: true, // تأكد من وجودها إذا كنت تستخدم Angular الحديثة
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './order-cash.html',
  styleUrl: './order-cash.css',
})
export class OrderCash implements OnInit {
  // تنفيذ الـ Interface
  shippingForm!: FormGroup;
  private readonly orderService = inject(OrderService);
  private readonly fb = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly notification = inject(Notification);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  id: string = '';

  ngOnInit(): void {
    // 1. جلب الـ ID فور تحميل المكون
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.shippingForm = this.fb.group({
      shippingAddress: this.fb.group({
        city: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^01[0125]\d{8}$/)]],
        details: ['', [Validators.required, Validators.minLength(10)]],
      }),
    });
  }

  onSubmit() {
    if (this.shippingForm.valid && this.id) {
      console.log('بيانات الشحن:', this.shippingForm.get('shippingAddress')?.value);

      this.orderService
        .orderCash(this.shippingForm.get('shippingAddress')?.value, this.id)
        .subscribe({
          next: (res) => {
            this.notification.show('Order placed successfully', 'success');
            this.router.navigate(['home']);
          },
          error: (err) => {
            this.notification.show('Order failed', 'error');
          },
        });
    } else {
      if (!this.id) console.error('خطأ: لم يتم العثور على ID السلة في الرابط');
      this.shippingForm.markAllAsTouched();
    }
  }

  payVisa() {
    this.orderService
      .orderVisa(this.shippingForm.get('shippingAddress')?.value, this.id)
      .subscribe({
        next: (res) => {
          if (res.status === 'success' && res.session?.url) {
            this.notification.show('جاري توجيهك لبوابة الدفع...', 'success');

            if (isPlatformBrowser(this.platformId)) {
              setTimeout(() => {
                window.location.href = res.session.url;
              }, 500);
            }
          }
        },
        error: (err) => {
          this.notification.show('Order failed', 'error');
        },
      });
  }
}
