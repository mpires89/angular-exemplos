import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../server/pessoa.service';
import { PessoaModule } from '../../models/pessoa.modulo';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  constructor(private service: PessoaService) { }
  
  pessoas: Array<PessoaModule>;

  ngOnInit() {
    this.service.getPessoas().subscribe(p => this.pessoas = p);
  }

}
