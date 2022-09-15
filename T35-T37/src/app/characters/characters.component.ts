import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor( private charactersService:CharactersService ) { }

  ngOnInit(): void {
    this.retrieveCharacter();
  }

  retrieveCharacter(): void{
    this.charactersService.getAll()
    .subscribe(
      data => {
        this.characters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void{
    this.retrieveCharacter();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(char: Character, index: number): void {
    this.currentCharacter = char;
    this.currentIndex = index;
  }
  searchName(): void{
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.charactersService.findByName(this.name)
    .subscribe(
      data => {
        this.characters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
