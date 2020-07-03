import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesterationFormComponent } from './regesteration-form.component';

describe('RegesterationFormComponent', () => {
  let component: RegesterationFormComponent;
  let fixture: ComponentFixture<RegesterationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegesterationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesterationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
