import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  public endereco: Endereco

  constructor() { }
  
  ngOnInit() {
    this.endereco = new Endereco();
  }
  
  salvar(){
    let logadouro = this.endereco.logradouro
    console.log(logadouro);
  }
}
