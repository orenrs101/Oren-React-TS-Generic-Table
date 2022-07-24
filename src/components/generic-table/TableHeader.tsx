import { useContext, useState } from "react";
import './Table.scss';
import './TableHeader.scss'
import { eSortDirection } from "../../entities/models/enums";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import TextInput from "../input/TextInput";
import { ColumnDefinitionType } from "../../entities/models/models";
import { ITableContextProps, TableDataContext } from "../../context/TableDataContext";

const TableHeader = <T, KEY extends keyof T>({ columns, filterHandler, handleSorting }: ITableHeaderProps<T, KEY>) => {

////////////////////////////////////////////////====States====//////////////////////////////////////////////////////////

    const [sortKey, setSortKey] = useState<KEY>();
    const [order, setOrder] = useState<eSortDirection>(eSortDirection.asc);

    const { dataList } = useContext(TableDataContext) as ITableContextProps<T>; //for display sort purpose

////////////////////////////////////////////////////==Handlers==////////////////////////////////////////////////////////

    const handleSortingChange = (key:KEY) => {
        const sortOrder = (key === sortKey && order === eSortDirection.asc) ? eSortDirection.des : eSortDirection.asc;

        setSortKey(key);
        setOrder(sortOrder);
        handleSorting!(key, sortOrder);
    }

////////////////////////////////////////////////////==Render==//////////////////////////////////////////////////////////

    const headers = columns.map((column:ColumnDefinitionType<T,KEY>, index: number) => {

        const defaultStyle = {
            width: column.width ?? 80,
        };

        const classNames:string = `sorting-icon ${(!dataList.length) ? 'hidden' : ''}`;

        const sortingIcon = (column.sortable)
                ? (sortKey === column.key && order ===  eSortDirection.asc)
                    ? <FontAwesomeIcon className={classNames} icon={faSortUp} />
                    : (sortKey === column.key && order ===  eSortDirection.des)
                        ? <FontAwesomeIcon className={classNames} icon={faSortDown} />
                        : <FontAwesomeIcon className={classNames} icon={faSort} />
                : null;

        //Assuming headers won't change within a table - using index for key is fine.
        // @ts-ignore
        return (
            <th
                key={`headCell-${index}`}
                style={defaultStyle} className={`${(sortKey === column.key) ? 'selected-header' : ''}`}
                tabIndex={index+1}
                onClick={(column.sortable && dataList.length) ? () => handleSortingChange(column.key) : undefined}
            >
                <label>{column.title}</label>
                {sortingIcon}
                {column.textInput ? <TextInput onChange={(textInput: string): void => filterHandler!(textInput, column.key)} /> : null}
            </th>
        );
    });

    return (
        <thead className="table-header">
            <tr>{headers}</tr>
        </thead>
    );
};

export default TableHeader;

export interface ITableHeaderProps<T, KEY extends keyof T> {
    columns: ColumnDefinitionType<T, KEY>[]
    filterHandler?: (input:string, key: KEY) => void
    handleSorting: (key:KEY, order:eSortDirection) => void
}
