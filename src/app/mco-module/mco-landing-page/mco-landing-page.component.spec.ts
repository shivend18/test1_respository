import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McoLandingPageComponent } from './mco-landing-page.component';

describe('McoLandingPageComponent', () => {
  let component: McoLandingPageComponent;
  let fixture: ComponentFixture<McoLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McoLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McoLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
