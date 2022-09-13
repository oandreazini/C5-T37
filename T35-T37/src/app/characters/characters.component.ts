import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/character/1,126,4,3,8,7,20,40,29")
    .subscribe(
      result =>{
        this.characters =result;
      }
      );
  }

}
