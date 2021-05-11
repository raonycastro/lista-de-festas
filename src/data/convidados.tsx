import { Convidado } from "../main/util/interfaces";

export abstract class DataConvidados {

    public static getConvidados(): Convidado[] {
        const dataConvidados = localStorage.getItem('dataConvidados');
        return dataConvidados ? JSON.parse(dataConvidados) : [];
    }

    public static setConvidados(convidados: Convidado[]) {
        localStorage.setItem('dataConvidados', JSON.stringify(convidados));
    }
}