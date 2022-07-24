import { useState } from 'react';
import { sortListByKey } from "../utilities/array-utils";
import { eSortDirection } from "../entities/models/enums";

const useSortableTable = <T, K extends keyof T>(data:T[]) => {
    const [tableData, setTableData] = useState<T[]>(data);

    const handleSorting = (sortKey:K, order:eSortDirection) => {
        if (sortKey) {
            setTableData(sortListByKey(tableData, sortKey, order));

//in case you want to handle sorting inside the hook
/*
            const sorted = [...tableData].sort((a, b) => {

                //NULL sorting guard
                if(a[sortKey] === null || a[sortKey] === undefined) return 1;
                if(b[sortKey] === null || b[sortKey] === undefined) return -1;
                if((a[sortKey] === null || a[sortKey] === undefined) && (b[sortKey] === null || b[sortKey] === undefined)) return 0;

                return (
                    // @ts-ignore
                    a[sortKey].toString().localeCompare(b[sortKey].toString(), {
                        numeric: true,
                    }) * (order === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);*/
        }
    };
    return [tableData, handleSorting];
};
export default useSortableTable;