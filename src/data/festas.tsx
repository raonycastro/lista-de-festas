import { Festa } from "../main/util/interfaces";

export abstract class DataFestas {

    public static getFestas(): Festa[] {
        const dataFestas = localStorage.getItem('dataFestas');
        return dataFestas ? JSON.parse(dataFestas) : [];
    }

    public static setFestas(festas: Festa[]) {
        localStorage.setItem('dataFestas', JSON.stringify(festas));
    }
}