import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateddoctorComponent } from './createddoctor.component';

describe('CreateddoctorComponent', () => {
  let component: CreateddoctorComponent;
  let fixture: ComponentFixture<CreateddoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateddoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
