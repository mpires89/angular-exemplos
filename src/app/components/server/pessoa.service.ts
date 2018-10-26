import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PessoaModule } from '../models/pessoa.modulo';


const URL_BUSCAR_PESSOAS: string = 'http://10.11.21.162:8080/pessoa';


@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  constructor(private http: HttpClient) { }
    
  getPessoas(): Observable<PessoaModule[]>{
    return this.http.get<PessoaModule[]>(URL_BUSCAR_PESSOAS);
  }

  


}
