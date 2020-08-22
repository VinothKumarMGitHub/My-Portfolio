import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmemenuComponent } from './aboutmemenu.component';

describe('AboutmemenuComponent', () => {
  let component: AboutmemenuComponent;
  let fixture: ComponentFixture<AboutmemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
