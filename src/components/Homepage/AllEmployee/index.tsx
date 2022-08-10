import { Table } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Employee } from "../../../model/model";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  employeeAddAndSearch: {
    display: "grid",
    gridTemplateColumns: "900px 200px",
    gap: "50px",
    padding: "10px",
  },
});

const AllEmployee: React.FC = () => {
  const classes = useStyles();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchEmployee, setSearchEmployee] = React.useState<Employee[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetch("./Employee.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  //Search Employee
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    console.log(searchText);
    const findEmployee = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchEmployee(findEmployee);
    // setSearchText("");
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <React.Fragment>
      <div>
        <h1 className="">
          <span className="">Employee</span>
        </h1>
        <div className={classes.employeeAddAndSearch}>
          <form
            className="searchInput"
            onSubmit={(e) => {
              handleSearch(e);
              inputRef.current?.blur();
            }}
          >
            <input
              type="input"
              placeholder="Enter Name for Search"
              className="input__box"
              ref={inputRef}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <Link to={`/AddEmployee`}>
            <button>Add Employee</button>
          </Link>
        </div>
        <div className="row">
          <Table>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Company</th>
                <th>Designation</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            {isSearching ? (
              <>
                {
                searchEmployee?.map((employee, index) => (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{employee?.employeeID}</td>
                      <td>{employee?.firstName}</td>
                      <td>{employee?.lastName}</td>
                      <td>{employee?.company}</td>
                      <td>{employee?.designation}</td>
                      <td>{employee?.email}</td>

                      <button
                        onClick={() => "handleEdit(employee?.employeeID)"}
                        className=""
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => "handleDelete(employee?.employeeID)"}
                        className=""
                      >
                        Delete
                      </button>
                    </tr>
                  </tbody>
                ))}
              </>
            ) : (
              <>
                {employees?.map((employee, index) => (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{employee?.employeeID}</td>
                      <td>{employee?.firstName}</td>
                      <td>{employee?.lastName}</td>
                      <td>{employee?.company}</td>
                      <td>{employee?.designation}</td>
                      <td>{employee?.email}</td>

                      <button
                        onClick={() => "handleEdit(employee?.employeeID)"}
                        className=""
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => "handleDelete(employee?.employeeID)"}
                        className=""
                      >
                        Delete
                      </button>
                    </tr>
                  </tbody>
                ))}
              </>
            )}
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllEmployee;
