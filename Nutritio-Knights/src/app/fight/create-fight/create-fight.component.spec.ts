import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFightComponent } from './create-fight.component';

describe('CreateFightComponent', () => {
  let component: CreateFightComponent;
  let fixture: ComponentFixture<CreateFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
