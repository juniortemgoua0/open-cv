import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstusercreateComponent } from './firstusercreate.component';

describe('FirstusercreateComponent', () => {
  let component: FirstusercreateComponent;
  let fixture: ComponentFixture<FirstusercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstusercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstusercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
