import { RotasTituloEnum } from "../enums/rotas-titulo.enum";
import { RotasEnum } from "../enums/rotas.enum";

export interface BreadCrumbInterface {
    nome: string | RotasTituloEnum;
    link: string | RotasEnum;
}