import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigletonComponent } from './sigleton.component';

describe('SigletonComponent', () => {
  let component: SigletonComponent;
  let fixture: ComponentFixture<SigletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
