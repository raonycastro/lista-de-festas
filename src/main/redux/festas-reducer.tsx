import { Festa } from "../util/interfaces";
import { ActionInterface } from "../util/interfaces/action.interface";
import { dataConvidados } from "./convidados-action";
import { dataFestas, FestasActionsEnum } from "./festas-action";

const INITIAL_STATE: Festa[] = [];

const FestasReducer = (state = INITIAL_STATE, action: ActionInterface<number & Festa>) => {
    switch (action.type) {
        case FestasActionsEnum.getFestas:
            dataFestas.sort((a, b) => Number(a.data.replace(/-/g, '')) - Number(b.data.replace(/-/g, '')));
            dataFestas.forEach(festa => festa.totalConvidados = dataConvidados.filter(convidado => convidado.festa === festa.id).length);
            return dataFestas ? dataFestas : state;
        case FestasActionsEnum.putFestas:
            const index = dataFestas.findIndex(festa => action.payload.id === festa.id);
            dataFestas.splice(index, 1, action.payload);
            return state;
        case FestasActionsEnum.postFestas:
            const ultimo = dataFestas[dataFestas.length - 1];
            action.payload.id = ultimo ? ultimo.id + 1 : 0;
            dataFestas.push(action.payload);
            return dataFestas ? dataFestas : [];
        default:
            return state
    }
}

export default FestasReducer;