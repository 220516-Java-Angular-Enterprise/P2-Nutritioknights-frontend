import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFightComponent } from './main-fight.component';

describe('MainFightComponent', () => {
  let component: MainFightComponent;
  let fixture: ComponentFixture<MainFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
