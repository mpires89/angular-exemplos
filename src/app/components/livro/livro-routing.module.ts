import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroFormComponent } from './form/livro-form.component';
import { LivroListaComponent } from './lista/livro-lista.component';

const routes: Routes = [
  { path: '', component: LivroFormComponent }, 
  { path: 'listar', component: LivroListaComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
