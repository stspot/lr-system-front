import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteByIdComponent } from './users-delete-by-id.component';

describe('UsersDeleteByIdComponent', () => {
  let component: UsersDeleteByIdComponent;
  let fixture: ComponentFixture<UsersDeleteByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDeleteByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersDeleteByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
