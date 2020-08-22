import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeprojectsComponent } from './aboutmeprojects.component';

describe('AboutmeprojectsComponent', () => {
  let component: AboutmeprojectsComponent;
  let fixture: ComponentFixture<AboutmeprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmeprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
