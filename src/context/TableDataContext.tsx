import { createContext } from "react";

export const TableDataLengthContext = createContext<ITableContextProp | null>(null);

export interface ITableContextProp {
    tableDataLength: number
}