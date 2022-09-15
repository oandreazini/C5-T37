import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiCharacterComponent } from './modifi-character.component';

describe('ModifiCharacterComponent', () => {
  let component: ModifiCharacterComponent;
  let fixture: ComponentFixture<ModifiCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
