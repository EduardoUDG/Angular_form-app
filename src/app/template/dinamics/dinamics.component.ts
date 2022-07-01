import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm);
    console.log('Form posted');
  }

  valdiateName():boolean {
    return this.myForm?.controls['name']?.invalid &&
           this.myForm?.controls['name']?.touched;
  }

}
