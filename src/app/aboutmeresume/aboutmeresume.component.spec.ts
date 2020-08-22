import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeresumeComponent } from './aboutmeresume.component';

describe('AboutmeresumeComponent', () => {
  let component: AboutmeresumeComponent;
  let fixture: ComponentFixture<AboutmeresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmeresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
