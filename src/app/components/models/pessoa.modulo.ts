import { Endereco } from "./endereco";

export class PessoaModule{
    nome: string;
    cpf: string;
    email: string;
    enderecoDto: Endereco = new Endereco();

}