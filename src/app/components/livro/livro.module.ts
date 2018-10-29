import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { LivroFormComponent } from './form/livro-form.component';
import { LivroListaComponent } from './lista/livro-lista.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LivroRoutingModule,
    FormsModule
  ],
  declarations: [LivroFormComponent, LivroListaComponent]
})
export class LivroModule { }
