import './TableBody.scss';
import { ColumnDefinitionType } from "../../entities/models/models";

const TableBody = <T, KEY extends keyof T>({ columns, data }: ITableRowsProps<T, KEY>) => {

    const rows = data.map((row:T, idx1: number) => {
        return (
            <tr className='table-body-row' key={`row-${idx1}`}>
                {columns.map((column: ColumnDefinitionType<T, KEY>, idx2: number) => {
                    //If value is missing (but not 0 number)
                    const cellData = (row[column.key] || typeof row[column.key] === "number") ? (row[column.key]) : "----" ;

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
    data: T[];
}