import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorServicerService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styles: [
  ]
})
export class SingupComponent implements OnInit {


  myForm: FormGroup = this._fb.group({
    name            : ['', [Validators.required, Validators.pattern( this._vs.lastNamePattern )]],
    email           : ['', [Validators.required, Validators.pattern( this._vs.emailPattern ) ], [this._ev ]],
    username        : ['', [Validators.required, this._vs.cannotBeUsername] ],
    password        : ['', [Validators.required, Validators.minLength(6)] ],
    confirmPassword : ['', [Validators.required] ],
  }, {
    validators: [ this._vs.sameInputs('password', 'confirmPassword') ]
  });

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidatorService,
    private _ev: EmailValidatorServicerService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Eduardo Chavez',
      email: 'test1@test.com',
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
