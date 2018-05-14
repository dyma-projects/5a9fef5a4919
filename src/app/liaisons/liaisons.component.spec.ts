import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonsComponent } from './liaisons.component';

describe('LiaisonsComponent', () => {
  let component: LiaisonsComponent;
  let fixture: ComponentFixture<LiaisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiaisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
