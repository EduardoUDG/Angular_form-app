import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styles: [
  ]
})
export class SingupComponent implements OnInit {

  lastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this._fb.group({
    name : ['', [Validators.required, Validators.pattern( this.lastNamePattern )]],
    email: ['', [Validators.required, Validators.pattern( this.emailPattern ) ]],
  });

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Eduardo Chavez',
      email: 'eduardo@gmail.com'
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
