import { createContext } from "react";

export const TableDataContext = createContext<ITableContextProps<any> | null>(null);

export interface ITableContextProps<T>{
    dataList: T[];
}