import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { clothing } from '../clothes-list/clothes';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  isAnumber: Boolean = true;
  msgError: Boolean =  false;

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> =  new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> =  new EventEmitter<string>();

  ngOnInit(): void {
  }

  downQuantity():void{
    if( this.quantity >  0){
        this.quantity --;
        this.msgError = false;
        this.isAnumber = true;
        this.quantityChange.emit(this.quantity);
      }
  }
  upQuantity():void{
    if(this.quantity<this.max){
    this.quantity ++;
    this.msgError = false;
    this.isAnumber = true;
    this.quantityChange.emit(this.quantity);
  }else{
    this.maxReached.emit("Se alcanzó  el maximo de stock");
  }
  }

  changeQuantity(){

    //primero verifico que sea numero
    if(isNaN(Number(this.quantity))){
      this.isAnumber = false;
      this.msgError = false;
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
    //verifica que el numero sea valido y que no sea mayor que el maximo
    else{
      this.isAnumber = true;
      if(Number(this.quantity) > this.max){
        this.msgError = true;
      }
      //la cantidad se vuelve un numero que se ponga en el input
      else{
        this.quantity = Number(this.quantity);
        this.quantityChange.emit(this.quantity);
      }
    }
  }
}
