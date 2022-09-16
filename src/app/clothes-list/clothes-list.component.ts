import { Component, OnInit } from '@angular/core';
import { clothing } from './clothes';


@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent implements OnInit {

   
  //tipar objeto 
  //clothes -> objeto, clothing -> es la interface que aclara de que tipo es 
  clothes: clothing[] = [
    {
      name: 'Jeans Clad Light',
      description: 'Jean con parches aplicados en tono más claro.',
      waist: 'Talle 28, Ancho 40, Largo 106.',
      price: 4000,
      stock: 0,
      images: 'assets/img/jeanss.jpg',
      clearance: false,
      quantity:0,
    },
    {
      name: 'Jeans Clad Light',
      description: 'Jean con parches aplicados en tono más claro.',
      waist: 'Talle 28, Ancho 40, Largo 106.',
      price: 4000,
      stock: 6  ,
      images: 'assets/img/jeanss.jpg',
      clearance: true,
      quantity:0,
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }
  downQuantity(outfit:clothing):void{
    if( outfit.quantity >  0)
        outfit.quantity --;
  }
  upQuantity(outfit:clothing):void{
    if(outfit.quantity<outfit.stock)
      outfit.quantity ++;
  }
 
}
