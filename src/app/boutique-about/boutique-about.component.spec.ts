import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueAboutComponent } from './boutique-about.component';

describe('BoutiqueAboutComponent', () => {
  let component: BoutiqueAboutComponent;
  let fixture: ComponentFixture<BoutiqueAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiqueAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiqueAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
