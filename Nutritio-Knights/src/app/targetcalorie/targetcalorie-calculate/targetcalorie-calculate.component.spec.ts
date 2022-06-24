import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetcalorieCalculateComponent } from './targetcalorie-calculate.component';

describe('TargetcalorieCalculateComponent', () => {
  let component: TargetcalorieCalculateComponent;
  let fixture: ComponentFixture<TargetcalorieCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetcalorieCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetcalorieCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
