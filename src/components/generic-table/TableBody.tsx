import './TableBody.scss';
import { ColumnDefinitionType } from "../../entities/models/models";
import { useContext } from "react";
import { ITableContextProps, TableDataContext } from "../../context/TableDataContext";

const TableBody = <T, KEY extends keyof T>({ columns, data }: ITableRowsProps<T, KEY>) => {
    const {dataList} = useContext(TableDataContext) as ITableContextProps<T>;

    const rows = dataList.map((row:T, idx1: number) => {
        return (
            <tr className='table-body-row' key={`row-${idx1}`}>
                {columns.map((column: ColumnDefinitionType<T, KEY>, idx2: number) => {
                    const cellData = (row[column.key]) ? (row[column.key]) : "--" ;
                    return (
                        <td key={`cell-${idx2}`}>
                            {/*@ts-ignore*/}
                            {(column.isUrl === true) ? <a href={cellData} title={cellData} target="_blank">{cellData} </a> : cellData}
                        </td>
                    )}
                )}
            </tr>
        );
    });

    return <tbody className="table-body">{rows}</tbody>;
};

export default TableBody;

export interface ITableRowsProps<T, KEY extends keyof T> {
    columns: ColumnDefinitionType<T, KEY>[];
    data?: T[]; //Conditional property since I'm using context. switch to required if removing context
}