import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.nextId || "",
      name: "",
      Designation: "",
      salary: "",
    };
  }

  componentDidUpdate(prevProps) {
    // If employee OR mode changes → reset form
    if (
      this.props.employee !== prevProps.employee ||
      this.props.isEdit !== prevProps.isEdit ||
      this.props.nextId !== prevProps.nextId
    ) {
      if (this.props.employee) {
        this.setState({
          id: this.props.employee.id,
          name: this.props.employee.name,
          Designation: this.props.employee.Designation,
          salary: this.props.employee.salary,
        });
      } else {
        this.setState({
          id: this.props.nextId,
          name: "",
          Designation: "",
          salary: "",
        });
      }
    }
  }

  componentDidMount() {
    if (!this.props.employee) {
      this.setState({ id: this.props.nextId });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    const { id, name, Designation, salary } = this.state;
    if (!name || !Designation || !salary) {
      alert("Please fill all fields before saving.");
      return;
    }

    if (this.props.onSave) {
      this.props.onSave({ id: Number(id), name, Designation, salary });
    }
  };

  render() {
    const { isEdit, onReset, employee } = this.props;
    const { id, name, Designation, salary } = this.state;

    const readOnly = !isEdit && employee !== null; // Details mode → readonly

    return (
      <div className="card p-3 mb-4">
        <form>
          <div className="mb-2">
            <label>Id</label>
            <input type="text" className="form-control" value={id} readOnly />
          </div>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              readOnly={readOnly}
              onChange={this.handleChange}
              placeholder="Enter employee name"
            />
          </div>
          <div className="mb-2">
            <label>Designation</label>
            <input
              type="text"
              name="Designation"
              className="form-control"
              value={Designation}
              readOnly={readOnly}
              onChange={this.handleChange}
              placeholder="Enter designation"
            />
          </div>
          <div className="mb-2">
            <label>Salary</label>
            <input
              type="text"
              name="salary"
              className="form-control"
              value={salary}
              readOnly={readOnly}
              onChange={this.handleChange}
              placeholder="Enter salary"
            />
          </div>

          <button
            type="button"
            className="btn btn-success me-2"
            disabled={readOnly}
            onClick={this.handleSave}
          >
            Save
          </button>
          <button type="button" className="btn btn-primary" onClick={onReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
