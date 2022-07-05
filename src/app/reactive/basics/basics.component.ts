import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  // myForm: FormGroup = new FormGroup({
  //   name  : new FormControl('RTX 4080ti'),
  //   price : new FormControl(1500),
  //   stock : new FormControl(5),
  // });

  myForm: FormGroup = this._fb.group({
    name  : [ , [Validators.required, Validators.minLength(3)]],
    price : [ , [Validators.required, Validators.min(0)]],
    stock : [ , [Validators.required, Validators.min(0)]],
  });


  constructor(
    private _fb: FormBuilder
  ) { }

  invalidInput( inputName: string ) {
    return this.myForm.controls[`${inputName}`].errors
            && this.myForm.controls[`${inputName}`].touched
  }


}
