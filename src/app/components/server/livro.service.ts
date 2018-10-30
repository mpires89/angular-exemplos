import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livro } from "../models/livro";

const URL_BUSCAR_POR_ID: string = 'http://localhost:8080/livro/buscarPorId/'
const URL_BUSCAR_LIVROS_BANCO: string = 'http://localhost:8080/livro/buscarLivros';
const URL_INSERIR_BANCO: string = 'http://localhost:8080/livro/inserir';
const URL_DELETAR_BANCO: string = 'http://localhost:8080/livro/remover/';
const URL_ALTERAR_BANCO: string = 'http://localhost:8080/livro/alterar';



@Injectable({
    providedIn: 'root'
  })

export class LivroService{


    constructor(private http: HttpClient) {

    }

    getLivrosBanco(): Observable<Livro[]> {
        console.log('chamou getLivrosBanco()');
        return this.http.get<Livro[]>(URL_BUSCAR_LIVROS_BANCO);
      }
    
      getPorID(id: number): Observable<Livro> {
        console.log('chamou getPorID()');
        return this.http.get<Livro>(URL_BUSCAR_POR_ID + id);
      }
    
      postLivroBanco(l: Livro): Observable<Livro> {
        console.log('chamou postLivroBanco()');
        return this.http.post<Livro>(URL_INSERIR_BANCO, l);
      }
    
      deleteLivro(id: number): Observable<Number> {
        return this.http.delete<Number>(URL_DELETAR_BANCO + id);
      }
    
      putLivro(l: Livro): Observable<Livro> {
        return this.http.put<Livro>(URL_ALTERAR_BANCO, l);
      }

}