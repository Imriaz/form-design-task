import {Table, TextField } from '@mui/material';
import React, {useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  employeeAddAndSearch: {
    display: "grid",
    gridTemplateColumns: "900px 200px",
    gap: "50px",
    padding: "10px",
  },
  form: {
    display: "grid",
    // gridTemplateColumns: "500px 500px",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    // backgroundColor: "skyblue",
    padding: "50px 100px",
  },
});
const Users = () => {
  const classes = useStyles();

  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchEmployee, setSearchEmployee] = React.useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [disable, setDisable] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);
  const [updateEmployeeID, setUpdateEmployeeID] = useState("");
  const [updateFirstName, setUpdateFirstName] = useState("");
  const [updateLastName, setUpdateLastName] = useState("");
  const [updateCompany, setUpdateCompany] = useState("");

  const [employeeID, setEmployeeID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  // Add User
  const addTo = (e) => {
    e.preventDefault();
    if (!employeeID || !firstName || !lastName) return;
    let newUser = {
      employeeID: employeeID,
      firstName: firstName,
      lastName: lastName,
      company: company,
    };
    const newUsers = [...employees, newUser];
    setEmployees(newUsers);
    setEmployeeID("");
    setFirstName("");
    setLastName("");
    setCompany("");

    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 5000);
  };

  //Search Employee
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    console.log(searchText);
    const findEmployee = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(searchText.toLowerCase())
      || employee.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchEmployee(findEmployee);
    // setSearchText("");
  };

    const inputRef = useRef(null);


  // Remove User
  const handleDelete = (employeeID) => {
    console.log("employeeID", employeeID);
    const newUsers = employees.filter((user) => user.employeeID !== employeeID);
    setEmployees(newUsers);
  };

  // handle Update
  const handleUpdate = (e) => {
    e.preventDefault();
    let newUsers = [...employees];
    const employeeID = newUsers[updateIndex].employeeID;
    let updateUser = {
      employeeID: employeeID,
      firstName: updateFirstName,
      lastName: updateLastName,
      company: updateCompany,
    };
    newUsers[updateIndex] = updateUser;
    setEmployees(newUsers);
    setIsUpdate(false);
  };

  const handleEdit = (employeeID, isUpdate) => {
    setIsUpdate(true);
    const findUser = employees.find((user) => user.employeeID === employeeID);
    const index = employees.findIndex((user) => user === findUser);
    setUpdateIndex(index);
    setUpdateFirstName(employees[index].firstName);
    setUpdateLastName(employees[index].lastName);
    setUpdateCompany(employees[index].company);
  };

  return (
    <div>
      {isUpdate ? (
        <div>
          <h2>Update</h2>
          <form onSubmit={handleUpdate}>
            <p>Employee ID</p>
            <input
              type="text"
              value={updateEmployeeID}
              onChange={(e) => setUpdateEmployeeID(e.target.value)}
            />
            <p>Employee First Name</p>
            <input
              type="text"
              value={updateFirstName}
              onChange={(e) => setUpdateFirstName(e.target.value)}
            />
            <p>Employee Last Name</p>
            <input
              type="text"
              value={updateLastName}
              onChange={(e) => setUpdateLastName(e.target.value)}
            />
            <br />
            <br />
            <TextField
              required
              id="company"
              label="Company"
              value={updateCompany}
              variant="outlined"
              onChange={(e) => setUpdateCompany(e.target.value)}
              inputProps={{
                inputMode: "text",
                pattern: "([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+",
              }}
            />
            <br />
            <button className="my-2" disabled={disable} type="submit">
              Update
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="my-4">
            <span className="bg-success text-white p-2 rounded">Add User</span>
          </h1>
          <form onSubmit={addTo}>
            <p>Employee ID</p>
            <input
              type="text"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              placeholder="Enter Employee ID"
            />
            <p>Employee First Name</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
            <p>Employee Last Name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />
            <br />
            <br />
            <TextField
              required
              id="company"
              label="Company"
              value={company}
              variant="outlined"
              onChange={(e) => setCompany(e.target.value)}
              inputProps={{
                inputMode: "text",
                pattern: "([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+",
              }}
            />
            <br />
            <br />
            <button className="btn btn-primary my-2" type="submit">
              Add
            </button>
          </form>
        </div>
      )}

      <div>
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
                  {searchEmployee?.map((employee, index) => (
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
                          onClick={() => handleEdit(employee?.employeeID)}
                          className=""
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(employee?.employeeID)}
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
        {/* <div className="row">
            {users.map((user) => (
              <User
                key={user.employeeID}
                user={user}
                updateUser={updateUser}
                removeUser={removeUser}
              ></User>
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default Users;