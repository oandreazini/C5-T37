import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  constructor(private http:HttpClient) { }

  giveBack(){
    return this.http.get("https://rickandmortyapi.com/api/character/1,126,4,3,8,7,20,40,29");
  }

  giveInfo(id :any){
    return this.http.get("https://rickandmortyapi.com/api/character/" +id);
  }
}
