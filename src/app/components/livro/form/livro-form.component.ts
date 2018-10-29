import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {
  categorias: Array<string>;
  livro: Livro;

  constructor() { }
  
  ngOnInit() {
    this.livro = new Livro();
  }
  salvar(){
    console.log(this.livro.titulo)
    console.log(this.livro.data)
    console.log(this.livro.autor)
    //TODO - Metodo Salvar

  }

}
