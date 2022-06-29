import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftedComponent } from './crafted.component';

describe('CraftedComponent', () => {
  let component: CraftedComponent;
  let fixture: ComponentFixture<CraftedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
