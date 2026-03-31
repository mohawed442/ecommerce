import { Component, inject, OnInit } from '@angular/core'; // أضفنا OnInit هنا
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order-service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order-cash',
  standalone: true, // تأكد من وجودها إذا كنت تستخدم Angular الحديثة
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './order-cash.html',
  styleUrl: './order-cash.css',
})
export class OrderCash implements OnInit { // تنفيذ الـ Interface
  shippingForm!: FormGroup;
  private readonly orderService = inject(OrderService);
  private readonly fb = inject(FormBuilder);
  private readonly activatedRoute = inject(ActivatedRoute);

  id: string = '';

  ngOnInit(): void {
    // 1. جلب الـ ID فور تحميل المكون
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';


    // 2. بناء الفورم
    this.shippingForm = this.fb.group({
      shippingAddress: this.fb.group({
        city: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^01[0125]\d{8}$/)]], 
        details: ['', [Validators.required, Validators.minLength(10)]]
      })
    });
  }

  onSubmit() {
    if (this.shippingForm.valid && this.id) {
      console.log('بيانات الشحن:', this.shippingForm.get('shippingAddress')?.value);

      this.orderService.orderCash(this.shippingForm.get('shippingAddress')?.value, this.id).subscribe({
        next: (res) => {
          console.log('تم الطلب بنجاح:', res);
        },
        error: (err) => {
          console.error('خطأ في عملية الطلب:', err);
        }
      });
    } else {
      if (!this.id) console.error('خطأ: لم يتم العثور على ID السلة في الرابط');
      this.shippingForm.markAllAsTouched();
    }
  }
}