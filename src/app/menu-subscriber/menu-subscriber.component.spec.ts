import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubscriberComponent } from './menu-subscriber.component';

describe('MenuSubscriberComponent', () => {
  let component: MenuSubscriberComponent;
  let fixture: ComponentFixture<MenuSubscriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSubscriberComponent]
    });
    fixture = TestBed.createComponent(MenuSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
