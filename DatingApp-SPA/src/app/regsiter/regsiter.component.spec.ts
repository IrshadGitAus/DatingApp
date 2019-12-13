/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegsiterComponent } from './regsiter.component';

describe('RegsiterComponent', () => {
  let component: RegsiterComponent;
  let fixture: ComponentFixture<RegsiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegsiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
