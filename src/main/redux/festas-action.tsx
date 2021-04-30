import { Festa } from "../util/interfaces"
import { ActionInterface } from "../util/interfaces/action.interface";

export const dataFestas: Festa[] = [
    {
        id: 0,
        nome: 'Festa 1',
        data: '2020-10-12'
    },
    {
        id: 1,
        nome: 'Festa 2',
        data: '2020-08-21'
    },
    {
        id: 2,
        nome: 'Festa 3',
        data: '2020-07-01'
    },
];

export enum FestasActionsEnum {
    getFestas = 'GET_FESTAS',
    putFestas = 'PUT_FESTAS',
    postFestas = 'POST_FESTAS'
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