import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../models/endereco';
import { PessoaModule } from '../../models/pessoa.modulo';
import { PessoaService } from '../../server/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  public endereco: Endereco
  public pessoa: PessoaModule

  constructor(private service: PessoaService) { }
  
  ngOnInit() {
    this.pessoa = new PessoaModule();
  }
  
  salvar(){
    this.service.postBanco(this.pessoa).subscribe(p => this.pessoa = p);
    this.pessoa = new PessoaModule();



  }
}
