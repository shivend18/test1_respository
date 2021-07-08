import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McoCardDetailsComponent } from './mco-card-details.component';

describe('McoCardDetailsComponent', () => {
  let component: McoCardDetailsComponent;
  let fixture: ComponentFixture<McoCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McoCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McoCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
