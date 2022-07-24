import { ColumnDefinitionType, IIssueItem, IPerson } from "../entities/models/models";

export const issuesTableColumns: ColumnDefinitionType<IIssueItem, keyof IIssueItem>[] = [
    {
        key: "id",
        title: "NO.",
        sortable: true,
        width: 50
    },
    {
        key: "issueType",
        title: "Issue Type.",
        sortable: true
    },
    {
        key: "severity",
        title: "Severity.",
        sortable: true
    },
    {
        key: "Component",
        title: "Component.",
        sortable: true
    },
    {
        key: "selector",
        title: "Selector.",
        sortable: false,
        textInput: true
    },
    {
        key: "url",
        title: "URL.",
        sortable: true,
        textInput: true,
        isUrl: true
    }
];

export const issuesList: IIssueItem[] = [
    {
        id: 0,
        issueType: "Interactable Role",
        severity: "Critical",
        Component: "ABC",
        selector: ".foo > #bar",
        url: "https://www.zzzz.co.uk"
    },
    {
        id: 3,
        issueType: "Accessible Name",
        severity: "Critical",
        Component: "AAA",
        selector: ".foo#bing > #bar",
        url: "https://www.zzzz.co.uk"
    },
    {
        id: 2,
        issueType: "Interactable Role",
        severity: "Minor",
        Component: "ABC",
        selector: ".some.class",
        url: "https://www.aaa.co.uk"
    },
    {
        id: 16,
        issueType: "Keyboard Accessible",
        severity: "Critical",
        Component: "ZZZ",
        selector: "#zooooom",
        url: "https://www.zzzz.co.uk"
    },
    {
        id: 8,
        issueType: "Keyboard Accessiblee",
        severity: "Minor",
        Component: "ABC",
        selector: ".vroooomo",
        url: "https://www.fff.co.uk"
    },
    {
        id: 9,
        issueType: "Color Contrast",
        severity: "Critical",
        Component: "ABC",
        selector: "#heythere",
        url: "https://www.aaa.co.uk"
    }
];

export const contactListColumns: ColumnDefinitionType<IPerson, keyof IPerson>[] = [
    {
        key: "name",
        title: "Name",
        sortable: true,
        width: 50
    },
    {
        key: "age",
        title: "Age ",
        sortable: true,
    },
    {
        key: "gender",
        title: "Gender",
        sortable: true,
        textInput: true
    },
    {
        key: "role",
        title: "Role",
        sortable: true,
        textInput: true
    },
    {
        key: "phone",
        title: "Phone",
        sortable: false,
        textInput: false
    }
];

export const contactList: IPerson[] = [
    {
        name: "Oren",
        age: 33,
        gender: "male",
        role: "Senior Front End Developer",
        phone: "0547879746"
    },
    {
        name: "Refael",
        age: 22,
        gender: "female",
        role: "Data Analyst",
        phone: "0547832746"
    },
    {
        name: "Shlomi",
        age: 44,
        gender: "male",
        role: "VP R&D",
        phone: "0527879747"
    }
];