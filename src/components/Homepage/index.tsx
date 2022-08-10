import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Employee } from '../../model/model';
import AddEmployee from '../AddEmployee';
import EmployeeList from '../EmployeeList';
import NotFound from '../NotFound';

const AllEmployee = () => {
    const [employees, setEmployees] = React.useState<Employee[]>([]);
      const [employeeID, setEmployeeID] = useState<number>(11);
      const [firstName, setFirstName] = useState<string>("");
      const [lastName, setLastName] = useState<string>("");
      const [company, setCompany] = useState<string>("");
      const [designation, setDesignation] =
        useState<string>("Software Engineer");
      const [email, setEmail] = useState<string>("");

    const handleAdd = (e: React.FormEvent) =>{
      e.preventDefault();
        setEmployees([
          ...employees,
          {
            employeeID: employeeID,
            firstName: firstName,
            lastName: lastName,
            company: company,
            designation: designation,
            email:email,
          },
        ]);
    }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeList employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/AddEmployee"
          element={
            <AddEmployee
              employeeID={employeeID}
              setEmployeeID={setEmployeeID}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              company={company}
              setCompany={setCompany}
              designation={designation}
              setDesignation={setDesignation}
              email={email}
              setEmail={setEmail}
              handleAdd={handleAdd}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllEmployee;