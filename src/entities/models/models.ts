//KEY can only be one of T properties (valid key of T)
export type ColumnDefinitionType<T, KEY extends keyof T> = {
    key: KEY
    title: string
    sortable: boolean
    width?: number
    textInput?: boolean
    isUrl?: boolean
};

export interface IIssueItem {
    id: number
    issueType: string
    severity: string
    Component: string
    selector: string
    url: string
}

export interface IPerson {
    name: string | null | undefined
    age: number | null
    gender: string
    role: string
    phone: string
}