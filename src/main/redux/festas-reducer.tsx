import { DataConvidados } from "../../data/convidados";
import { DataFestas } from "../../data/festas";
import { Festa } from "../util/interfaces";
import { ActionInterface } from "../util/interfaces/action.interface";
import { FestasActionsEnum } from "./festas-action";
import { deleteConvidadosFesta } from "./convidados-action";

const INITIAL_STATE: Festa[] = [];

const FestasReducer = (state = INITIAL_STATE, action: ActionInterface<number & Festa>) => {
    const { getFestas, setFestas } = DataFestas;
    const { getConvidados } = DataConvidados;
    let festas = getFestas() ? getFestas() : [];
    switch (action.type) {
        case FestasActionsEnum.getFestas:
            festas = festas.sort((a, b) => Number(a.data.replace(/-/g, '')) - Number(b.data.replace(/-/g, '')));
            festas.forEach(festa => festa.totalConvidados = getConvidados().filter(convidado => convidado.festa === festa.id).length);
            return festas;
        case FestasActionsEnum.putFestas:
            const putIndex = festas.findIndex(festa => action.payload.id === festa.id);
            festas.splice(putIndex, 1, action.payload);
            setFestas(festas ? [...festas] : state);
            return festas;
        case FestasActionsEnum.postFestas:
            const ultimo = festas[festas.length - 1];
            action.payload.id = ultimo ? ultimo.id + 1 : 0;
            festas.push(action.payload);
            setFestas(festas ? [...festas] : state);
            return festas;
        case FestasActionsEnum.deleteFestas:
            deleteConvidadosFesta(action.payload);
            const deleteIndex = festas.findIndex(festa => festa.id === action.payload.id);
            festas.splice(deleteIndex, 1);
            setFestas(festas ? [...festas] : state);
            return festas;
        default:
            return state
    }
}

export default FestasReducer;