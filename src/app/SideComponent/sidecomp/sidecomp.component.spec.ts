import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecompComponent } from './sidecomp.component';

describe('SidecompComponent', () => {
  let component: SidecompComponent;
  let fixture: ComponentFixture<SidecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
