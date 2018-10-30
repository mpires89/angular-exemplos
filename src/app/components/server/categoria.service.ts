import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

const URL_BUSCAR_CATEGORIAS_BANCO: string = 'http://localhost:8080/categoria/buscarCategorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategoriasBanco(): Observable<Categoria[]> {
    console.log('chamou getGenerosBanco()');
    return this.http.get<Categoria[]>(URL_BUSCAR_CATEGORIAS_BANCO);
  }
}
