import React, { useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Employee } from "../../model/model";

interface inputFieldProps {
  employeeID: number;
  setEmployeeID: React.Dispatch<React.SetStateAction<number>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  designation: string;
  setDesignation: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const useStyles = makeStyles({
  form: {
    display: "grid",
    // gridTemplateColumns: "500px 500px",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    backgroundColor: "#F5EEF8",
    padding: "20px 100px",
    border: "2px solid black",
    borderRadius: "10px",
    margin: "20px 150px",
  },
  formGroup: {
    gap: "10px",
    // backgroundColor: "skyblue",
    padding: "10px",
  },
  form__back__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginLeft: "580px",
  },
  form__submit__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginRight: "580px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const designations = [
  {
    value: "Trainee Software Engineer",
    label: "Trainee Software Engineer",
  },
  {
    value: "Software Engineer",
    label: "Software Engineer",
  },
  {
    value: "Senior Software Engineer",
    label: "Senior Software Engineer",
  },
];

const AddEmployee = ({
  employeeID,
  setEmployeeID,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  company,
  setCompany,
  designation,
  setDesignation,
  email,
  setEmail,
  handleAdd,
}: inputFieldProps) => {
  // const [employee, setEmployee] = React.useState({
  //     employeeID: "",
  //     firstName: "",
  //     lastName: "",
  //     company: "",
  //     designation: "",
  //     email: "",
  // });

  const classes = useStyles();

  return (
    <React.Fragment>
      <h1>Add Employee</h1>
      <form>
        <Link to={`/`}>
          <button className={classes.form__back__button}>Back</button>
        </Link>
        <div className={classes.form}>
          <div className={classes.formGroup}>
            <TextField
              required
              label="Employee ID"
              id="employeeID"
              value={employeeID}
              onChange={(event) => setEmployeeID(Number(event.target.value))}
              type="number"
              inputProps={{ pattern: "[0-9]*" }}
            />

            {/* <label className="form-label">Employee ID: </label>
            <input
              type="number"
              className="form-input"
              placeholder="Employee ID"
              name="employeeID"
              onBlur={handleChange}
              minLength={1}
              maxLength={100}
              pattern="^[0-9]"
              required
            /> */}
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <TextField
              required
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              variant="outlined"
              inputProps={{
                inputMode: "text",
                pattern: "([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+",
              }}
            />
            {/* <label className="form-label">First Name: </label>
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            /> */}
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <TextField
              required
              id="lastName"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              inputProps={{
                inputMode: "text",
                pattern: "([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+",
              }}
            />
            {/* <label className="form-label">Last Name: </label>
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            /> */}
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <TextField
              required
              id="company"
              label="Company"
              variant="outlined"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              inputProps={{
                inputMode: "text",
                pattern: "([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+",
              }}
            />
            {/* <label className="form-label">Company: </label>
            <input
              type="text"
              className="form-input"
              placeholder="Company"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            /> */}
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <TextField
              id="designation"
              select
              label="Designation"
              value={designation}
              //   onChange={handleDesignation}
              onChange={(event) => setDesignation(event.target.value)}
              SelectProps={{
                native: true,
              }}
              helperText="Please select designation"
            >
              {designations.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            {/* <label className="form-label">Designation: </label>
            <input
              required
              type="text"
              className="form-input"
              placeholder="Designation"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
            /> */}
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              inputProps={{
                inputMode: "email",
                pattern: "[^ ]+@[^ ]+.[a-z]{2,3}",
              }}
            />
            {/* <label className="form-label">Email: </label>
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              maxLength={300}
              pattern="[^ ]+@[^ ]+\.[a-z]{2,3}"
              required
            /> */}
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
        </div>
        <button
          type="submit"
          id="submit"
          onClick={(e) => handleAdd(e)}
          value="SEND"
          className={classes.form__submit__button}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddEmployee;
