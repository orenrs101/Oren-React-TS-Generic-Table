import React, { useState } from 'react';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import './Table.scss';
import { filterByKeyString, sortListByKey } from "../../utilities/array-utils";
import { ColumnDefinitionType } from "../../entities/models/models";
import { eSortDirection } from "../../entities/models/enums";
import { TableDataContext } from "../../context/TableDataContext";

const Table = <T, KEY extends keyof T>({ columns, data }: ITableProps<T, KEY>) => {

////////////////////////////////////////////////====States====//////////////////////////////////////////////////////////

    const [dataList, setDataList] = useState<T[]>(data);

////////////////////////////////////////////////====Handlers====////////////////////////////////////////////////////////

    const filterTableList = (input:string, key: KEY) => {
        const filteredList:T[] = filterByKeyString([...data], key ,input);
        setDataList(filteredList);
    };

    const handleSorting = (sortKey:KEY, order:eSortDirection) => {
        if (sortKey) {
            setDataList(sortListByKey(dataList, sortKey, order));
        }
    };

////////////////////////////////////////////////====Render====//////////////////////////////////////////////////////////

    return (
        <>
            <TableDataContext.Provider value={{dataList}}>

                <table className="table">
                    <TableHeader
                        columns={columns}
                        filterHandler={filterTableList}
                        handleSorting={handleSorting}
                    />
                    <TableBody columns={columns} />
                </table>

            </TableDataContext.Provider>

            {(!dataList.length) ? <h3 className='no-data'>No Data To Display</h3> : null}
        </>
    );
};

export default Table;

export interface ITableProps<T, KEY extends keyof T> {
    columns: ColumnDefinitionType<T, KEY>[]; //to control which columns to display their order
    data: T[];
}