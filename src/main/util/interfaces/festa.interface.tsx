import { Convidado } from "./convidado.interface";

export interface Festa {
    id: number;
    nome: string;
    data: string;
    totalConvidados?: number;
}