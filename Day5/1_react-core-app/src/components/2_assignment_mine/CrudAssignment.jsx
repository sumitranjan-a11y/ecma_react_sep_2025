import React, { Component } from 'react';
import FormComponent from './FormComponent';
import DataTable from '../common/DataTable';
import ConfirmModal from '../common/ConfirmModal';

class CrudAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employee: { id: 1, name: "", designation: "", salary: 0 },
            formDisabled: false,
            edit: false,
            showModal: false,
            deleteCandidate: null
        }
        this.changeEmployee = this.changeEmployee.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.resetEmployee = this.resetEmployee.bind(this);
        this.selectEmployee = this.selectEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
        this.handleModalYes = this.handleModalYes.bind(this);
        this.handleModalNo = this.handleModalNo.bind(this);
    }

    changeEmployee(e) {
        const field = e.target.name;
        const newEmployee = { ...this.state.employee };
        if ((field === 'id') || (field === 'salary')) {
            newEmployee[field] = parseInt(e.target.value);
        } else {
            newEmployee[field] = e.target.value;
        }
        this.setState({ employee: newEmployee });
    }

    saveEmployee(data) {
        if (this.state.edit) {
            const temp_employees = [...this.state.employees];
            const itemIndex = temp_employees.findIndex(e => e.id === parseInt(data.id));
            temp_employees[itemIndex] = { ...data };
            this.setState({ employees: [...temp_employees] }, () => {
                this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: 0 }, edit: false, formDisabled: false });
            });
        } else {
            const temp_employees = [...this.state.employees, { ...data }];
            this.setState({ employees: [...temp_employees] }, () => {
                this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: 0 }, edit: false, formDisabled: false });
            });
        }
    }

    getNextId(employees) {
        return employees.length ? employees[employees.length - 1].id + 1 : 1;
    }

    resetEmployee() {
        this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: 0 }, edit: false, formDisabled: false });
    }

    selectEmployee(item, allowEdit) {
        this.setState({ employee: { ...item }, edit: allowEdit, formDisabled: !allowEdit });
    }

    removeEmployee(id) {
        this.setState({ showModal: true, deleteCandidate: id });
    }

    handleModalYes() {
        const { deleteCandidate, employees } = this.state;
        const temp_employees = employees.filter(e => e.id !== deleteCandidate);

        this.setState({
            employees: [...temp_employees],
            showModal: false,
            deleteCandidate: null
        }, () => {
            this.resetEmployee();
        });
    }

    handleModalNo() {
        this.setState({
            showModal: false,
            deleteCandidate: null
        }, () => {
            this.resetEmployee();
        });
    }

    render() {
        return (
            <>
                <FormComponent employee={this.state.employee} changeEmployee={this.changeEmployee} saveEmployee={this.saveEmployee} resetEmployee={this.resetEmployee}
                    disabled={this.state.formDisabled} />
                <hr />
                <DataTable items={this.state.employees} onSelect={this.selectEmployee} onDelete={this.removeEmployee}>
                    <h5 className="text-primary text-uppercase font-weight-bold">Employees Table</h5>
                </DataTable>
                <ConfirmModal show={this.state.showModal} title={"Delete Employee"} message={"Are you sure you want to delete?"}
                    handleYes={this.handleModalYes} handleNo={this.handleModalNo} />
            </>
        );
    }
}

export default CrudAssignment;