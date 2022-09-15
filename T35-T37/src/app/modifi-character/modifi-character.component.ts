import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifi-character',
  templateUrl: './modifi-character.component.html',
  styleUrls: ['./modifi-character.component.css'],
})
export class ModifiCharacterComponent implements OnInit {
  id: any;

  currentCharacter: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: '',
  };
  message = '';

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.paramMap.get('id');
    this.characterService.get(this.id).subscribe(
      (result) => {
        this.currentCharacter = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCharacter(id: string): void {
    this.characterService.get(id).subscribe(
      (data) => {
        this.currentCharacter = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateCharacter(): void {
    this.message = '';
    this.characterService
      .update(this.currentCharacter.id, this.currentCharacter)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteCharacter(): void {
    this.characterService.delete(this.currentCharacter.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/characters']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
