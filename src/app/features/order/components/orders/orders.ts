import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service';
import { Notification } from '../../../../core/services/notification';
import { Loading } from "../../../../shared/components/loading/loading";

@Component({
  selector: 'app-orders',
  imports: [Loading],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  private readonly orderService = inject(OrderService);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly notification = inject(Notification);

  ordersList: any[] = [];
  loading: boolean = false;

  getOrders() {
    this.loading = true;
    this.orderService.getOrders().subscribe({
      next: (res) => {
        this.ordersList = res;
        this.loading = false;
        this._cdr.detectChanges();
      },
      error: (err) => {
        this.notification.show('Error fetching orders', 'error');
        this.loading = false;
        this._cdr.detectChanges();
      },
    });
  }

  ngOnInit() {
    this.getOrders();
  }
}
