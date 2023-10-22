import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPicturesComponent } from './gallery-pictures.component';

describe('GalleryPicturesComponent', () => {
  let component: GalleryPicturesComponent;
  let fixture: ComponentFixture<GalleryPicturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryPicturesComponent]
    });
    fixture = TestBed.createComponent(GalleryPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
