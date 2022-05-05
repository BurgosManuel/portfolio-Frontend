import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalEditComponentComponent } from './professional-edit-component.component';

describe('ProfessionalEditComponentComponent', () => {
  let component: ProfessionalEditComponentComponent;
  let fixture: ComponentFixture<ProfessionalEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalEditComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
