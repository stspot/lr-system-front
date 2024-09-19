import { Component } from '@angular/core';
import * as regexDataV from '../../regex/regex';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent {

  updateProfileForm: FormGroup;
  regexData = regexDataV;

  constructor() {
    this.updateProfileForm = new FormGroup({
      firstName: new FormControl('Zvezdomir', [Validators.required, Validators.pattern(regexDataV.FIRST_NAME_REGEX)]),
      lastName: new FormControl('Stefchev', [Validators.required, Validators.pattern(regexDataV.LAST_NAME_REGEX)]),
      phoneNumber: new FormControl('+000000000111', [Validators.required, Validators.pattern(regexDataV.PHONE_NUMBER_REGEX)])
    });
  }

  get firstName() { return this.updateProfileForm.get('firstName'); }
  get lastName() { return this.updateProfileForm.get('lastName'); }
  get phoneNumber() { return this.updateProfileForm.get('phoneNumber'); }

  onSubmit() {
    if (this.updateProfileForm.valid) {
      console.log(this.updateProfileForm.value);
    }
  }
}
