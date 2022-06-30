import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalUserComponent } from './journal-user.component';

describe('JournalUserComponent', () => {
  let component: JournalUserComponent;
  let fixture: ComponentFixture<JournalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
