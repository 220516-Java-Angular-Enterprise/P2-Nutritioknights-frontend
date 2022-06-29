import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightUserComponent } from './fight-user.component';

describe('FightUserComponent', () => {
  let component: FightUserComponent;
  let fixture: ComponentFixture<FightUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
