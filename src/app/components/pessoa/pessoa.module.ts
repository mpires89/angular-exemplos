import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './inserir/pessoa.component';
import { PessoaListComponent } from './list/pessoa-list.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule
  ],
  declarations: [PessoaComponent, PessoaListComponent]
})
export class PessoaModule { }
