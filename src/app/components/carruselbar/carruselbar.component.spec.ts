import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselbarComponent } from './carruselbar.component';

describe('CarruselbarComponent', () => {
  let component: CarruselbarComponent;
  let fixture: ComponentFixture<CarruselbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselbarComponent]
    });
    fixture = TestBed.createComponent(CarruselbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
