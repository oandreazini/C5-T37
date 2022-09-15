import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharcatersComponent } from './add-charcaters.component';

describe('AddCharcatersComponent', () => {
  let component: AddCharcatersComponent;
  let fixture: ComponentFixture<AddCharcatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCharcatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCharcatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
