import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmecontactmeComponent } from './aboutmecontactme.component';

describe('AboutmecontactmeComponent', () => {
  let component: AboutmecontactmeComponent;
  let fixture: ComponentFixture<AboutmecontactmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmecontactmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmecontactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
