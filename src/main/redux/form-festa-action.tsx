import { Festa } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";

export enum FormFestaActionsEnum {
    setFestaForm = 'SET_FESTA_FORM',
    getFestaForm = 'GET_FESTA_FORM'
}

export function setFestaForm(festa: Festa): ActionInterface<Festa> {
    return {
        type: FormFestaActionsEnum.setFestaForm,
        payload: festa
    };
}

export function getFestaForm(id: number): ActionInterface<number> {
    return {
        type: FormFestaActionsEnum.getFestaForm,
        payload: id
    };
}
