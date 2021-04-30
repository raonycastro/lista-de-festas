import { Convidado } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";

export const dataConvidados: Convidado[] = [
    { id: 0, nome: 'convidado 11', festa: 0 },
    { id: 1, nome: 'convidado 12', festa: 0 },
    { id: 2, nome: 'convidado 13', festa: 0 },
    { id: 3, nome: 'convidado 14', festa: 0 },
    { id: 4, nome: 'convidado 15', festa: 0 },
    { id: 5, nome: 'convidado 16', festa: 0 },
    { id: 6, nome: 'convidado 21', festa: 1 },
    { id: 7, nome: 'convidado 22', festa: 1 },
    { id: 8, nome: 'convidado 23', festa: 1 },
    { id: 9, nome: 'convidado 24', festa: 1 },
    { id: 10, nome: 'convidado 31', festa: 2 },
    { id: 11, nome: 'convidado 32', festa: 2 },
]

export enum ConvidadosActionsEnum {
    getConvidados = 'GET_CONVIDADOS',
    putConvidados = 'PUT_CONVIDADOS',
    postConvidados = 'POST_CONVIDADOS'
}

export function getConvidados(id: number): ActionInterface<number>  {
    return {
        type: ConvidadosActionsEnum.getConvidados,
        payload: id
    };
}

export function putConvidados(convidado: Convidado): ActionInterface<Convidado>  {
    return {
        type: ConvidadosActionsEnum.putConvidados,
        payload: convidado
    };
}

export function postConvidados(convidado: Convidado): ActionInterface<Convidado>  {
    return {
        type: ConvidadosActionsEnum.postConvidados,
        payload: convidado
    };
}