import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { clothing } from './clothes-list/clothes';

@Injectable({
  providedIn: 'root'
})

export class ClothesCartService {

  private _cartList: clothing[] = [];
  cartList : BehaviorSubject <clothing[]>= new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(clothes: clothing) {
    let products  = this._cartList.find((v1)=> v1.name == clothes.name);

    if(!products){
      this._cartList.push( { ... clothes });
    }else{
        products.quantity += clothes.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  getCart(){
    return this._cartList;
  }
}
