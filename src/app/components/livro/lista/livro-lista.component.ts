import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro';
import { Autor } from '../../models/autor';
import { LivroService } from '../../server/livro.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livro: Livro;
  autor: Autor;
  livros: Array<Livro>;

  constructor(private service: LivroService) { }

  ngOnInit() {
    this.livro = new Livro();
    this.autor = new Autor();
    this.livros =  new Array;

    this.service.getLivrosBanco().subscribe(r => this.livros = r);
  }

  public excluir(id: number): void {
    this.service.deleteLivro(id).subscribe(r => this.service.getLivrosBanco().subscribe(rs => this.livros = rs));
  }

}
