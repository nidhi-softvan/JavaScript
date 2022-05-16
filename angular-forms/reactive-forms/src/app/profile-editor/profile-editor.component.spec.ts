import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEDitorComponent } from './profile-editor.component';

describe('ProfileEDitorComponent', () => {
  let component: ProfileEDitorComponent;
  let fixture: ComponentFixture<ProfileEDitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEDitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEDitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
