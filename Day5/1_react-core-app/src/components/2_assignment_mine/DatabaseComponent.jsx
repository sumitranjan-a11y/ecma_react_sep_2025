import React, { Component } from "react";

class DatabaseComponent extends Component {
  render() {
    const { items, onDetails, onEdit, onDelete } = this.props;

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESIGNATION</th>
              <th>SALARY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.Designation}</td>
                <td>{emp.salary}</td>
                <td>
                  <a
                    href="#"
                    className="text-info"
                    style={{ marginRight: "30px" }} // big gap
                    onClick={() => onDetails(emp.id)}
                  >
                    Details
                  </a>
                  <a
                    href="#"
                    className="text-warning"
                    style={{ marginRight: "30px" }} // big gap
                    onClick={() => onEdit(emp.id)}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-danger"
                    onClick={() => onDelete(emp.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DatabaseComponent;
