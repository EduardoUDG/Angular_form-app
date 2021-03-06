import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[]
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
})
export class DinamicsComponent {

  @ViewChild('myForm') myForm!: NgForm;

  favorteGame: string = '';

  person: Person = {
    name: 'Eduardo',
    favorites: [
      { id: 1, name: 'GOW' },
      { id: 2, name: 'HALO' },
    ]
  }

  constructor() { }


  save() {
    console.log(this.myForm);
    console.log('Form posted');
  }

  addFavorite() {
    if ( this.favorteGame === '' ) return;

    const newFavoriteGame: Favorite = {
      id: this.person.favorites.length + 1,
      name:this.favorteGame
    }
    this.person.favorites.push({ ...newFavoriteGame })
    this.favorteGame = '';
  }

  deleteFavorite( id: number ): void {
    this.person.favorites.splice( id, 1);
  }

  valdiateName():boolean {
    return this.myForm?.controls['name']?.invalid &&
           this.myForm?.controls['name']?.touched;
  }

}
