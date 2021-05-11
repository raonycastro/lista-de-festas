import { DataConvidados } from "../../data/convidados";
import { Convidado, Festa } from "../util/interfaces";
import { ActionInterface } from "../util/interfaces/action.interface";
import { Sort } from "../util/sort";
import { ConvidadosActionsEnum } from "./convidados-action";

const INITIAL_STATE: Convidado[] = [];

const ConvidadosReducer = (state = INITIAL_STATE, action: ActionInterface<number & Convidado & Festa>) => {
    const { getConvidados, setConvidados } = DataConvidados;
    let convidados = getConvidados() ? getConvidados() : [];
    switch (action.type) {
        case ConvidadosActionsEnum.getConvidados:
            convidados = convidados
                .filter(c => c.festa === action.payload)
                .sort((a, b) => Sort.sortString(a.nome, b.nome));
            return convidados;
        case ConvidadosActionsEnum.putConvidados:
            const putIndex = convidados.findIndex(c => action.payload.id === c.id);
            convidados.splice(putIndex, 1, action.payload);
            setConvidados(convidados ? [...convidados] : state);
            return getConvidados();
        case ConvidadosActionsEnum.postConvidados:
            const ultimo = convidados[convidados.length - 1];
            action.payload.id = ultimo ? ultimo.id + 1 : 0;
            convidados.push(action.payload);
            setConvidados(convidados ? [...convidados] : state);
            return getConvidados();
        case ConvidadosActionsEnum.deleteConvidados:
            const deleteIndex = convidados.findIndex(convidado => convidado.id === action.payload.id);
            convidados.splice(deleteIndex, 1);
            setConvidados(convidados ? [...convidados] : state);
            return getConvidados();
        case ConvidadosActionsEnum.deleteConvidadosFesta:
            convidados = convidados.filter(convidado => convidado.festa !== (action.payload as Festa).id);
            setConvidados(convidados ? [...convidados] : state);
            return getConvidados();
        default:
            return state
    }
}

export default ConvidadosReducer;