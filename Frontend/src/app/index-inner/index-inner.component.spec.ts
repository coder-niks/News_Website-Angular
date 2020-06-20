import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInnerComponent } from './index-inner.component';

describe('IndexInnerComponent', () => {
  let component: IndexInnerComponent;
  let fixture: ComponentFixture<IndexInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
