import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PessoaModule } from '../models/pessoa.modulo';


const URL_BUSCAR_PESSOAS: string = 'http://localhost:8080/pessoa/buscarTodos';
const URL_SALVAR_PESSOA: string = 'http://localhost:8080/pessoa/inserir';
const URL_EXCLUIR_PESSOA: string = 'http://localhost:8080/pessoa/excluir/';


@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor(private http: HttpClient) { }
    
  getPessoas(): Observable<PessoaModule[]>{
    return this.http.get<PessoaModule[]>(URL_BUSCAR_PESSOAS);
  }

  postBanco(pessoa:PessoaModule): Observable<PessoaModule>{
    return this.http.post<PessoaModule>(URL_SALVAR_PESSOA,pessoa )  
  }

  excluirPessoa(cpf: string):Observable<void>{
    return this.http.delete<void>(URL_EXCLUIR_PESSOA+cpf)
  }
  


  


}
