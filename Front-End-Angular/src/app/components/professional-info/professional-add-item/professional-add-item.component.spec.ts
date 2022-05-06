import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAddItemComponent } from './professional-add-item.component';

describe('ProfessionalAddItemComponent', () => {
  let component: ProfessionalAddItemComponent;
  let fixture: ComponentFixture<ProfessionalAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
