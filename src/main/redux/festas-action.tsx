import { Festa } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";

export enum FestasActionsEnum {
    getFestas = 'GET_FESTAS',
    putFestas = 'PUT_FESTAS',
    postFestas = 'POST_FESTAS',
    deleteFestas = 'DELETE_FESTAS'
}

export function getFestas(page: number): ActionInterface<number> {
    return {
        type: FestasActionsEnum.getFestas,
        payload: page
    };
}

export function putFestas(festa: Festa): ActionInterface<Festa> {
    return {
        type: FestasActionsEnum.putFestas,
        payload: festa
    };
}

export function postFestas(festa: Festa): ActionInterface<Festa> {
    return {
        type: FestasActionsEnum.postFestas,
        payload: festa
    };
}

export function deleteFestas(festa: Festa): ActionInterface<Festa> {
    return {
        type: FestasActionsEnum.deleteFestas,
        payload: festa
    };
}