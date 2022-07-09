import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
    name: [ '', [Validators.required, Validators.minLength(3)] ],
    favorites: this._fb.array([
      ['Metal Gear'     , Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required)
  })

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  inputValidate( inputName:string ) {
    return this.myForm.controls[`${inputName}`].errors
            && this.myForm.controls[`${inputName}`].touched;
  }

  save() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log( this.myForm.value );
  }

}
