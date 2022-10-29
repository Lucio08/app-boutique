import { Component, OnInit } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { ClothesDataService } from '../clothes-data.service';
import { clothing } from './clothes';


@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {


  //tipar objeto
  //clothes -> objeto, clothing -> es la interface que aclara de que tipo es
  clothes: clothing[] = [];

  constructor(
    private cart: ClothesCartService,
    private clothesDataService: ClothesDataService) {

   }

  ngOnInit(): void {
    this.clothesDataService.getAllClothes()
    .subscribe(clothes => this.clothes = clothes );
  }

  addToCart(outfit: clothing):void{
    if(outfit.stock > 0 && outfit.quantity > 0 && outfit.quantity <= outfit.stock){
     this.cart.addToCart(outfit);
     outfit.stock -= outfit.quantity;
     outfit.quantity = 0;
    }
  }
  maxReached(m: string){
      alert(m);
  }

}
