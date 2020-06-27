import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdetailsComponent } from './newsdetails.component';

describe('NewsdetailsComponent', () => {
  let component: NewsdetailsComponent;
  let fixture: ComponentFixture<NewsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
