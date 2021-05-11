import { Convidado, Festa } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";

export enum ConvidadosActionsEnum {
    getConvidados = 'GET_CONVIDADOS',
    putConvidados = 'PUT_CONVIDADOS',
    postConvidados = 'POST_CONVIDADOS',
    deleteConvidados = 'DELETE_CONVIDADOS',
    deleteConvidadosFesta = 'DELETE_CONVIDADOS_FESTA',
}

export function getConvidados(id: number): ActionInterface<number>  {
    return {
        type: ConvidadosActionsEnum.getConvidados,
        payload: id
    };
}

export function putConvidados(convidado: Convidado): ActionInterface<Convidado> {
    return {
        type: ConvidadosActionsEnum.putConvidados,
        payload: convidado
    };
}

export function postConvidados(convidado: Convidado): ActionInterface<Convidado> {
    return {
        type: ConvidadosActionsEnum.postConvidados,
        payload: convidado
    };
}

export function deleteConvidados(convidado: Convidado): ActionInterface<Convidado> {
    return {
        type: ConvidadosActionsEnum.deleteConvidados,
        payload: convidado
    };
}

export function deleteConvidadosFesta(festa: Festa): ActionInterface<Festa> {
    return {
        type: ConvidadosActionsEnum.deleteConvidadosFesta,
        payload: festa
    };
}