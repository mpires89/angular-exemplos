import { Component, OnInit } from '@angular/core';
import { Endereco } from '../../models/endereco';
import { PessoaModule } from '../../models/pessoa.modulo';
import { PessoaService } from '../../server/pessoa.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  public endereco: Endereco;
  public pessoa: PessoaModule;
  cpfURL: string;
  
  constructor(private service: PessoaService,private route: ActivatedRoute, 
    private router: Router) { }
  
  ngOnInit() {
    this.pessoa = new PessoaModule();

    this.cpfURL = this.route.snapshot.paramMap.get('cpf');

    if(this.cpfURL){
      this.buscarPorCPF();
    }
  }
  

  cadastrar(): void{
    if(this.pessoa.cpf){
      this.service.alterarPessoa(this.pessoa)
      .subscribe(() => {this.pessoa = new PessoaModule()
      this.router.navigate(['/pessoa/pessoa-list']);
      });
    } else{
      this.service.postBanco(this.pessoa).subscribe(() => {this.pessoa = new PessoaModule()
      this.router.navigate(['/pessoa/pessoa-list']);
      });
    }
  }


  buscarPorCPF(): void{
    this.service.getPessoaPorCpf(this.cpfURL).subscribe(pessoaRecebida => this.pessoa = pessoaRecebida);
  }
}
