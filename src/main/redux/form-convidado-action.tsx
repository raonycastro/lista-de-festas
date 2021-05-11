import { Convidado } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";

export enum FormConvidadoActionsEnum {
    setConvidadoForm = 'SET_CONVIDADO_FORM',
    getConvidadoForm = 'GET_CONVIDADO_FORM',
}

export function getConvidadoForm(id: number): ActionInterface<number>  {
    return {
        type: FormConvidadoActionsEnum.getConvidadoForm,
        payload: id
    };
}

export function setConvidadoForm(convidado: Convidado): ActionInterface<Convidado>  {
    return {
        type: FormConvidadoActionsEnum.setConvidadoForm,
        payload: convidado
    };
}
