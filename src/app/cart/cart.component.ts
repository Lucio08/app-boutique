import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ClothesCartService } from '../clothes-cart.service';
import { clothing } from '../clothes-list/clothes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$!: Observable<clothing[]>;

  //me subcribi al servicio para actualizar cada vez que hay un cambio
  constructor(private cart: ClothesCartService) {
      this.cartList$ = cart.cartList.asObservable();

   }

  ngOnInit(): void {
  }

}
