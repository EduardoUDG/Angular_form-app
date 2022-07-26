import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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

}
