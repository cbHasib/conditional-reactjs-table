import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Components/Table/Table";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("tableTestData.json")
      .then((response) => response.json())
      .then((json) => setTableData(json));
  }, []);

  return (
    <div className="App">
      <Table
        data={tableData}
        column={["name", "city", "email", "joiningDate", "role"]}
        sort={["name", "city", "email", "joiningDate", "role"]}
      />

      <Table
        data={tableData}
        column={["name", "email", "role"]}
        sort={["name"]}
      />

      <Table
        data={tableData}
        column={["email", "joiningDate", "role"]}
        sort={["joiningDate", "role"]}
      />

      <Table
        data={tableData}
        column={["name", "city", "joiningDate", "role"]}
        sort={["city", "role"]}
      />
    </div>
  );
}

export default App;
