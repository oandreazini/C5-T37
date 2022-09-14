import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor( private charactersService:CharactersService ) { }

  ngOnInit() {

    this.charactersService.giveBack()
      .subscribe( result => this.characters = result);
  }

}
