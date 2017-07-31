import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheroComponent } from './addhero.component';

describe('AddheroComponent', () => {
  let component: AddheroComponent;
  let fixture: ComponentFixture<AddheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
