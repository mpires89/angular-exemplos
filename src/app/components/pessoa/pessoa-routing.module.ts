import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './inserir/pessoa.component';
import { PessoaListComponent } from './list/pessoa-list.component';

const routes: Routes = [
  { path: '', component: PessoaComponent }, 
  { path: 'plist', component: PessoaListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
