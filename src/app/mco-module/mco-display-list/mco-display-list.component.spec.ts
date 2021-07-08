import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McoDisplayListComponent } from './mco-display-list.component';

describe('McoDisplayListComponent', () => {
  let component: McoDisplayListComponent;
  let fixture: ComponentFixture<McoDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McoDisplayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McoDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
