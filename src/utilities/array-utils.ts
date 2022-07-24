import { eSortDirection } from "../entities/models/enums";

export const sortListByKey = <T, KEY extends keyof T>(arr: T[], key: KEY, order: eSortDirection) => {
    return [...arr].sort((a:T, b:T) => {

        //null | undefined guard
        if(a[key] === null || a[key] === undefined) return 1;
        if(b[key] === null || b[key] === undefined) return -1;
        if((a[key] === null || a[key] === undefined) && (b[key] === null || b[key] === undefined)) return 0;

        return (
            // @ts-ignore - todo: add primitive type-test or assetion
            a[key].toString().localeCompare(b[key].toString(), "en", {
                numeric: true
            }) * (order === eSortDirection.asc ? 1 : -1)
        );
    });
}

export const filterByKeyString = <T, KEY extends keyof T>(arr: T[], key: KEY, input:string): T[] => {
    return arr.filter((item:T) => {
        if(typeof item[key] === "string") {
            let val:string = item[key] as unknown as string;
            return val.toLowerCase().includes(input.toLowerCase());
        }
    });
}