import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdvertiseComponent } from './admin-advertise.component';

describe('AdminAdvertiseComponent', () => {
  let component: AdminAdvertiseComponent;
  let fixture: ComponentFixture<AdminAdvertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdvertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
