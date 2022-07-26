import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styles: [
  ]
})
export class SingupComponent implements OnInit {


  myForm: FormGroup = this._fb.group({
    name : ['', [Validators.required, Validators.pattern( this._vs.lastNamePattern )]],
    email: ['', [Validators.required, Validators.pattern( this._vs.emailPattern ) ]],
    username: ['', [Validators.required, this._vs.cannotBeUsername] ],
  });

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Eduardo Chavez',
      email: 'eduardo@gmail.com',
      username: 'lalofapmx'
    })
  }

  inputInvalid( camp: string ) {
    return this.myForm.get(camp)?.invalid
        && this.myForm.get(camp)?.touched;
  }

  formSubmit() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log( this.myForm.value );
  }

}
