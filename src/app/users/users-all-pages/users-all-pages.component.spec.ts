import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAllPagesComponent } from './users-all-pages.component';

describe('UsersAllPagesComponent', () => {
  let component: UsersAllPagesComponent;
  let fixture: ComponentFixture<UsersAllPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAllPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersAllPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
