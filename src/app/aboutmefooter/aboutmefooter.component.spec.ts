import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmefooterComponent } from './aboutmefooter.component';

describe('AboutmefooterComponent', () => {
  let component: AboutmefooterComponent;
  let fixture: ComponentFixture<AboutmefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
