import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroFormComponent } from './form/livro-form.component';
import { LivroListaComponent } from './lista/livro-lista.component';

const routes: Routes = [
  { path: '', component: LivroFormComponent }, 
  { path: 'listar', component: LivroListaComponent },
  { path: 'listar/:id', component: LivroFormComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
