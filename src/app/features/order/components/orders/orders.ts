import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service';
import { Notification } from '../../../../core/services/notification';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  private readonly orderService = inject(OrderService);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly notification = inject(Notification);

  ordersList: any[] = [];

  getOrders() {
    this.orderService.getOrders().subscribe({
      next: (res) => {
        this.ordersList = res;
        this._cdr.detectChanges();
      },
      error: (err) => {
        this.notification.show('Error fetching orders', 'error');
        this._cdr.detectChanges();
      },
    });
  }

  ngOnInit() {
    this.getOrders();
  }
}
