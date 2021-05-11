export abstract class Sort {

    static sortString(a: string, b: string) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
}