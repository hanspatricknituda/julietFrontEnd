import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCareComponent } from './device-care.component';

describe('DeviceCareComponent', () => {
  let component: DeviceCareComponent;
  let fixture: ComponentFixture<DeviceCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
