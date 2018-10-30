import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Autor } from "../models/autor";


const URL_BUSCAR_AUTORES_BANCO: string = 'http://localhost:8080/autor/buscarAutores';

@Injectable({
    providedIn: 'root'
  })
export class AutorService{
    constructor(private http: HttpClient) { }

  getAutoresBanco(): Observable<Autor[]> {
    console.log('chamou getAutoresBanco()');
    return this.http.get<Autor[]>(URL_BUSCAR_AUTORES_BANCO);
  }
}