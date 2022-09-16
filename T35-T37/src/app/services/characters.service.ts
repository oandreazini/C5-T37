import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Character } from '../models/character.model';

const baseUrl = 'https://c5-t41-bbdd.herokuapp.com/characters'
@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  constructor(private http:HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(baseUrl);
  }

  get(id :any): Observable<Character> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name: any): Observable<Character[]>{
    return this.http.get<Character[]>(`${baseUrl}?name=${name}`);
  }
}
