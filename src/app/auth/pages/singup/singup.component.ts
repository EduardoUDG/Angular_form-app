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

  myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.pattern( this.lastNamePattern )]],
  });

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
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
