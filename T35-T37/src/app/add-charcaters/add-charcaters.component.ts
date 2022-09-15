import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharactersService } from '../services/characters.service';



@Component({
  selector: 'app-add-charcaters',
  templateUrl: './add-charcaters.component.html',
  styleUrls: ['./add-charcaters.component.css'],
})
export class AddCharcatersComponent implements OnInit {
  character: Character = {

    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  };
  submitted = false;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {}

  saveCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      image: this.character.image,
    };

    this.charactersService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: '',
    };
  }
}
