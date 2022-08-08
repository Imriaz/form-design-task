import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Employee } from "../../../model/model";



const columns: GridColDef[] = [
  { field: "employeeID", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "company", headerName: "Company", width: 130 },
  { field: "designation", headerName: "Designation", width: 130 },
  { field: "email", headerName: "Email", width: 130 }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
];

export default function AllData() {
      const [employees, setEmployees] = React.useState<Employee[]>([]);

      React.useEffect(() => {
        fetch("./Employee.json")
          .then((res) => res.json())
          .then((data) => setEmployees(data));
      }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      {employees?.map((employee, index) => (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      ))}
    </div>
  );
}
