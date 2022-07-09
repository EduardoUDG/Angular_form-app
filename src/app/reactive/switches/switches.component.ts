import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  myForm: FormGroup = this._fb.group({
    gender        : ['M', Validators.required],
    notifications : [true, Validators.required],
    terms         : [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: true
    });
  }
}
