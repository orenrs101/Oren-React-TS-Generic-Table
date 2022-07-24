import React from 'react';
import './App.css';
import { issuesTableColumns, issuesList, contactListColumns, contactList } from "./data/data";
import Table from "./components/generic-table/Table";

function App() {
  return (
      <div className="App">
        <Table columns={issuesTableColumns} data={issuesList} />
        {/*<Table columns={contactListColumns} data={contactList} />*/}
        {/*<Table columns={issuesTableColumns} data={[]} />*/}
      </div>
  );
}

export default App;