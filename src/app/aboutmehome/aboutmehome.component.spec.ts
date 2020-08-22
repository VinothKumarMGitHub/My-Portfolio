import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmehomeComponent } from './aboutmehome.component';

describe('AboutmehomeComponent', () => {
  let component: AboutmehomeComponent;
  let fixture: ComponentFixture<AboutmehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
