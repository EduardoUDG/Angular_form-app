import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  lastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  cannotBeUsername = ( argument: FormControl ):ValidationErrors | null => {
    const value:string = argument.value?.trim().toLowerCase();
    if( value === 'strider' ) {
      return {
        noStrider: true
      }
    }
    return null;
  }


  sameInputs( field1:string, field2:string ) {
    return ( formControl: AbstractControl ): ValidationErrors | null => {
      const pass1 = formControl.get(field1)?.value;
      const pass2 = formControl.get(field2)?.value;

      if( pass1 !== pass2 ) {
        formControl.get(field2)?.setErrors({ noEqual: true });
        return { noEqual: true }
      }
      formControl.get(field2)?.setErrors(null);
      return null;
    }
  }

}
