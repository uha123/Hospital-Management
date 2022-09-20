import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedpatientComponent } from './createdpatient.component';

describe('CreatedpatientComponent', () => {
  let component: CreatedpatientComponent;
  let fixture: ComponentFixture<CreatedpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
