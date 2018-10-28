import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../server/pessoa.service';
import { PessoaModule } from '../../models/pessoa.modulo';
import { Endereco } from '../../models/endereco';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  public pessoas: Array<PessoaModule>;
  public pessoa: PessoaModule;
  public endereco: Array<Endereco>;

  constructor(private service: PessoaService) { }
  

  ngOnInit() {
    this.pessoas = new Array();
    this.pessoa = new PessoaModule();
    this.service.getPessoas().subscribe(p => this.pessoas = p);

    }

  excluir(cpf: string){
    console.log(cpf);
    this.service.excluirPessoa(cpf).subscribe();
    this.service.getPessoas().subscribe(p => this.pessoas = p);
  }
  alterar(cpf: String): void{
    console.log(cpf);
  }

}
