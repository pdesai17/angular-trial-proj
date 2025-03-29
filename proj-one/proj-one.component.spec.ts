import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjOneComponent } from './proj-one.component';

describe('ProjOneComponent', () => {
  let component: ProjOneComponent;
  let fixture: ComponentFixture<ProjOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjOneComponent]
    });
    fixture = TestBed.createComponent(ProjOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
