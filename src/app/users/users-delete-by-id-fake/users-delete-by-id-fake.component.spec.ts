import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteByIdFakeComponent } from './users-delete-by-id-fake.component';

describe('UsersDeleteByIdFakeComponent', () => {
  let component: UsersDeleteByIdFakeComponent;
  let fixture: ComponentFixture<UsersDeleteByIdFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDeleteByIdFakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersDeleteByIdFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
