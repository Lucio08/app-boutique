import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { clothing } from './clothes-list/clothes';

const URL = 'https://635d8b1fea764497f0dee076.mockapi.io/clothe';

@Injectable({
  providedIn: 'root'
})
export class ClothesDataService {

  constructor(private http: HttpClient) { }

  //observable qu emira un arreglo de cervezas
  public getAllClothes(): Observable<clothing[]>{
    return this.http.get<clothing[]>(URL)
        .pipe(
            tap((clothes: clothing[]) => clothes.forEach(clothe => clothe.quantity = 0))
        );
  }
}
