import React from "react";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "grid",
    // gridTemplateColumns: "500px 500px",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    backgroundColor: "skyblue",
    padding: "50px 100px",
  },
  formGroup: {
    gap: "10px",
    backgroundColor: "gray",
    padding: "10px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const AddEmployee: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <form>
        <div className={classes.form}>
          <div className={classes.formGroup}>
            <label className="form-label">Employee ID: </label>
            <input
              type="number"
              className="form-input"
              placeholder="Employee ID"
              minLength={1}
              maxLength={100}
              pattern="^[0-9]"
              required
            />
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <label className="form-label">First Name: </label>
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            />
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <label className="form-label">Last Name: </label>
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            />
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <label className="form-label">Company: </label>
            <input
              type="text"
              className="form-input"
              placeholder="Company"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            />
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <label className="form-label">Designation: </label>
            <input
              type="text"
              className="form-input"
              placeholder="Designation"
              minLength={1}
              maxLength={100}
              pattern="([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+"
              required
            />
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
          <div className={classes.formGroup}>
            <label className="form-label">Email: </label>
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              maxLength={300}
              pattern="[^ ]+@[^ ]+\.[a-z]{2,3}"
              required
            />
            {/* <p className={classes.errorMessage}>Error message</p> */}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default AddEmployee;
