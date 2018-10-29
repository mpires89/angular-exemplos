import { Autor } from "./autor";
import { Categoria } from "./categoria";

export class Livro{
    id: number;
    titulo: string;
    data: Date;
    autor: Autor = new Autor();
    categoria: Categoria = new Categoria();

}