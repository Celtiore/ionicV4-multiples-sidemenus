import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1Page } from './menu1.page';

describe('Menu1Page', () => {
  let component: Menu1Page;
  let fixture: ComponentFixture<Menu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
