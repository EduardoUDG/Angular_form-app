import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  productNameValid(): boolean {
    return this.miFormulario?.controls['product']?.invalid &&
           this.miFormulario?.controls['product']?.touched;
  }

  // save( form:NgForm ) {
  save() {
    console.log( this.miFormulario );
  }

}
