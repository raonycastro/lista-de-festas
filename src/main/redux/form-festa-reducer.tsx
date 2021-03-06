import { DataFestas } from "../../data/festas";
import { Festa } from "../util/interfaces";
import { ActionInterface } from "../util/interfaces/action.interface";
import { FormFestaActionsEnum } from "./form-festa-action";

const INITIAL_STATE: Festa = {
    id: -1,
    nome: '',
    data: '2020-09-10'
};

const FormFestaReducer = (state = INITIAL_STATE, action: ActionInterface<Festa & number>) => {
    const { getFestas } = DataFestas;
    switch (action.type) {
        case FormFestaActionsEnum.getFestaForm:
            const festa = getFestas().find(f => f.id === action.payload);
            return { ...INITIAL_STATE,  ...festa };
        case FormFestaActionsEnum.setFestaForm:
            return { ...state, ...action.payload as Festa };
        default:
            return state;
    }
}

export default FormFestaReducer;