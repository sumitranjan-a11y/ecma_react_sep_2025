import React, { Component } from "react";
import FormComponent from "./FormComponentMine";
import DatabaseComponent from "./DatabaseComponent";

class ListRootMine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, name: "Manish", Designation: "Trainer", salary: "12345" },
        { id: 2, name: "Abhijeet", Designation: "Team Lead", salary: "23456" },
        { id: 3, name: "Ramakant", Designation: "PM", salary: "34567" },
      ],
      selectedEmployee: null,
      isEdit: true, // Add mode initially
    };
  }

  getNextId = () => {
    if (this.state.employees.length === 0) return 1;
    const maxId = Math.max(...this.state.employees.map((e) => e.id));
    return maxId + 1;
  };

  detailsClicked = (id) => {
    const emp = this.state.employees.find((e) => e.id === id) || null;
    this.setState({ selectedEmployee: emp, isEdit: false });
  };

  editClicked = (id) => {
    const emp = this.state.employees.find((e) => e.id === id) || null;
    this.setState({ selectedEmployee: emp, isEdit: true });
  };

  deleteClicked = (id) => {
    const emp = this.state.employees.find((e) => e.id === id);
    if (!emp) return;

    // Show confirmation prompt
    const confirmDelete = window.confirm(
      `Are you sure you want to delete employee "${emp.name}" (ID: ${emp.id})?`
    );

    if (confirmDelete) {
      this.setState((prevState) => ({
        employees: prevState.employees.filter((e) => e.id !== id),
        selectedEmployee: null,
        isEdit: true,
      }));
    }
  };

  resetForm = () => {
    this.setState({ selectedEmployee: null, isEdit: true });
  };

  saveEmployee = (updatedEmp) => {
    if (this.state.employees.some((emp) => emp.id === updatedEmp.id)) {
      // Update existing
      this.setState((prevState) => ({
        employees: prevState.employees.map((emp) =>
          emp.id === updatedEmp.id ? updatedEmp : emp
        ),
        selectedEmployee: null,
        isEdit: true,
      }));
    } else {
      // Add new
      this.setState((prevState) => ({
        employees: [...prevState.employees, updatedEmp],
        selectedEmployee: null,
        isEdit: true,
      }));
    }
  };

  render() {
    const { employees, selectedEmployee, isEdit } = this.state;

    return (
      <div className="container">
        {/* Form */}
        <div className="mb-4" style={{ border: "2px solid #007bff", padding: "15px" }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-primary mb-0">ADD EMPLOYEE INFORMATION</h4>
            <span className="fw-bold">FORM COMPONENT</span>
          </div>
          <FormComponent
            employee={selectedEmployee}
            isEdit={isEdit}
            onReset={this.resetForm}
            onSave={this.saveEmployee}
            nextId={this.getNextId()}
          />
        </div>

        {/* Table */}
        <div style={{ border: "2px solid #28a745", padding: "15px" }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-primary mb-0">EMPLOYEES TABLE</h4>
            <span className="fw-bold">DATATABLE COMPONENT</span>
          </div>
          <DatabaseComponent
            items={employees}
            onDetails={this.detailsClicked}
            onEdit={this.editClicked}
            onDelete={this.deleteClicked}
          />
        </div>
      </div>
    );
  }
}

export default ListRootMine;
