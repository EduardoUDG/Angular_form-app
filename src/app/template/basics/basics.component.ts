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

  initForm = {
    product: 'RXT 4080ti',
    price: 10,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  productNameValid(): boolean {
    return this.miFormulario?.controls['product']?.invalid &&
           this.miFormulario?.controls['product']?.touched;
  }

  productPriceValid(): boolean {
    return this.miFormulario?.controls['price']?.value < 0 &&
           this.miFormulario?.controls['price']?.touched;
  }

  // save( form:NgForm ) {
  save() {
    console.log('Sending form');
    this.miFormulario.resetForm({
      price: 0,
      stock: 0
    });
  }

}
