import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberOuvrageComponent } from './subscriber-ouvrage.component';

describe('SubscriberOuvrageComponent', () => {
  let component: SubscriberOuvrageComponent;
  let fixture: ComponentFixture<SubscriberOuvrageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriberOuvrageComponent]
    });
    fixture = TestBed.createComponent(SubscriberOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
