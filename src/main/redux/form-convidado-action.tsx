import { Convidado } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";
import { dataConvidados } from "./convidados-action";

export enum FormConvidadoActionsEnum {
    setConvidadoForm = 'SET_CONVIDADO_FORM',
    getConvidadoForm = 'GET_CONVIDADO_FORM',
}

export function getConvidadoForm(id: number): ActionInterface<Convidado>  {
    const convidado = dataConvidados.find(c => c.id === id) as Convidado;
    return {
        type: FormConvidadoActionsEnum.getConvidadoForm,
        payload: convidado
    };
}

export function setConvidadoForm(convidado: Convidado): ActionInterface<Convidado>  {
    return {
        type: FormConvidadoActionsEnum.setConvidadoForm,
        payload: convidado
    };
}
