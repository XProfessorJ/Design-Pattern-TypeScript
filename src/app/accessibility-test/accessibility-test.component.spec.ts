import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityTestComponent } from './accessibility-test.component';

describe('AccessibilityTestComponent', () => {
  let component: AccessibilityTestComponent;
  let fixture: ComponentFixture<AccessibilityTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
