export function dateFormat(data: string) {
    const year = data.slice(0, 4);
    const mounth = data.slice(5, 7);
    const day = data.slice(8, 10);
    return `${day}/${mounth}/${year}`;
}