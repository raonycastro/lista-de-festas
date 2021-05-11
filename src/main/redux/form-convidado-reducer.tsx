import { DataConvidados } from "../../data/convidados";
import { Convidado } from "../util/interfaces";
import { ActionInterface } from "../util/interfaces/action.interface";
import { FormConvidadoActionsEnum } from "./form-convidado-action";

const INITIAL_STATE: Convidado = {
    id: -1,
    nome: '',
    festa: -1
};

const FormConvidadoReducer = (state = INITIAL_STATE, action: ActionInterface<Convidado & number>) => {
    const { getConvidados } = DataConvidados;
    switch (action.type) {
        case FormConvidadoActionsEnum.getConvidadoForm:
            const convidado = getConvidados().find(c => c.id === action.payload) as Convidado;
            return { ...INITIAL_STATE, ...convidado };
        case FormConvidadoActionsEnum.setConvidadoForm:
            return { ...state, ...action.payload as Convidado };
        default:
            return state
    }
}

export default FormConvidadoReducer;