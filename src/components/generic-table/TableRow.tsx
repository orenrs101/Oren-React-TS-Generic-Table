import React from 'react';
import { ColumnDefinitionType } from "../../entities/models/models";

const TableRow:React.FC<ITableRowProps<any,any>> = <T, KEY extends keyof T>({ columns, row }:ITableRowProps<T, KEY>) => {
        return (
            <tr className='table-body-row'>
                {columns.map((column: ColumnDefinitionType<T, KEY>, idx: number) => {
                    const cellData = (row[column.key] || typeof row[column.key] === "number") ? (row[column.key]) : "----" ;
                    return (
                        <td key={`cell-${idx}`}>
                            {/*@ts-ignore*/}
                            {(column.isUrl === true) ? <a href={cellData} title={cellData} target="_blank">{cellData} </a> : cellData}
                        </td>
                    )}
                )}
            </tr>
        );
};

export default React.memo(TableRow);

export interface ITableRowProps<T, KEY extends keyof T> {
    columns: ColumnDefinitionType<T, KEY>[];
    row:T
}