import { combineReducers } from 'redux';
import ConvidadosReducer from './convidados-reducer';
import FestasReducer from './festas-reducer';
import FormConvidadoReducer from './form-convidado-reducer';
import FormFestaReducer from './form-festa-reducer';

const rootReducer = combineReducers({
    convidados: ConvidadosReducer,
    convidadoForm: FormConvidadoReducer,
    festas: FestasReducer,
    festaForm: FormFestaReducer
})

export default rootReducer;