import { Convidado } from "../util/interfaces";
import { ActionInterface } from "../util/interfaces/action.interface";
import { ConvidadosActionsEnum, dataConvidados } from "./convidados-action";

const INITIAL_STATE: Convidado[] = [];

const ConvidadosReducer = (state = INITIAL_STATE, action: ActionInterface<number & Convidado>) => {
    switch (action.type) {
        case ConvidadosActionsEnum.getConvidados:
            const convidados = dataConvidados.filter(c => c.festa === action.payload);
            return convidados ? convidados : state;
        case ConvidadosActionsEnum.putConvidados:
            const index = dataConvidados.findIndex(c => action.payload.id === c.id);
            dataConvidados.splice(index, 1, action.payload);
            return dataConvidados ? dataConvidados : state;
        case ConvidadosActionsEnum.postConvidados:
            const ultimo = dataConvidados[dataConvidados.length - 1];
            action.payload.id = ultimo ? ultimo.id + 1 : 0;
            dataConvidados.push(action.payload);
            return dataConvidados ? dataConvidados : state;
        default:
            return state
    }
}

export default ConvidadosReducer;