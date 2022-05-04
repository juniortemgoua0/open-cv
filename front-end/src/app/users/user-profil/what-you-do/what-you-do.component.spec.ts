import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouDoComponent } from './what-you-do.component';

describe('WhatYouDoComponent', () => {
  let component: WhatYouDoComponent;
  let fixture: ComponentFixture<WhatYouDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatYouDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
