import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro';
import { Categoria } from '../../models/categoria';
import { Autor } from '../../models/autor';
import { LivroService } from '../../server/livro.service';
import { AutorService } from '../../server/autor.service';
import { CategoriaService } from '../../server/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  id: number;
  categoria: Categoria;
  autor: Autor;
  categorias: Array<Categoria>;
  autores: Array<Autor>;
  livro: Livro;

  constructor(private serviceLivro: LivroService,
    private serviceAutor: AutorService,
    private serviceCategoria: CategoriaService,
    private route: ActivatedRoute ) { }
  
  ngOnInit() {
    this.livro = new Livro();
    this.autor = new Autor();
    this.categoria = new Categoria();
    this.categorias = new Array;
    this.autores = new Array;

    this.serviceAutor.getAutoresBanco().subscribe(ga => this.autores = ga);
    this.serviceCategoria.getCategoriasBanco().subscribe(gc => this.categorias = gc);

    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.serviceLivro.getPorID(this.id).subscribe(r => this.livro = r);
    }
  }
  salvar(): void {
    if (!this.id) {
      this.livro.categoria = this.categoria;
      this.livro.autor = this.autor;
      this.serviceLivro.postLivroBanco(this.livro).subscribe(() => console.log("Adicionou"));
      this.livro = new Livro();
      this.autor = new Autor();
    this.categoria = new Categoria();
    } else {
      this.livro.categoria = this.categoria;
      this.livro.autor = this.autor;
      this.serviceLivro.putLivro(this.livro).subscribe(() => console.log("Alterou"));
      this.livro = new Livro();
    }
  } 

}
