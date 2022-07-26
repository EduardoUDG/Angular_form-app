import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorServicerService implements AsyncValidator{

  constructor(
    private _http: HttpClient
  ) { }

  validate(control: AbstractControl):Observable<ValidationErrors | null> {

    const email = control.value;
    console.log( email );

    return this._http.get<any[]>(`http://localhost:4000/usuarios?q=${email}`)
                    .pipe(
                      map( resp => {
                        return ( resp.length === 0 )
                          ? null
                          : { emailTaked:true };
                      })
                    )
  }

}