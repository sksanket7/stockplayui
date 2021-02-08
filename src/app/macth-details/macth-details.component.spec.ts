import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacthDetailsComponent } from './macth-details.component';

describe('MacthDetailsComponent', () => {
  let component: MacthDetailsComponent;
  let fixture: ComponentFixture<MacthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
