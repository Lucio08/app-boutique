import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueClothesComponent } from './boutique-clothes.component';

describe('BoutiqueClothesComponent', () => {
  let component: BoutiqueClothesComponent;
  let fixture: ComponentFixture<BoutiqueClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiqueClothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiqueClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
