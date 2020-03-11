import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePageComponent } from './calculate-page.component';

describe('CalculatePageComponent', () => {
  let component: CalculatePageComponent;
  let fixture: ComponentFixture<CalculatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
