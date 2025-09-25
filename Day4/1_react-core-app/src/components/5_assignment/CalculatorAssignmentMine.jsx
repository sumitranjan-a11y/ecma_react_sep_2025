import React, { Component, useRef } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { t1: 0, t2: 0 }, result: 0 };
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.resetClicks = this.resetClicks.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault(); // Prevent to page reload
    const val1 = parseFloat(this.ref1.current.value) || 0;
    const val2 = parseFloat(this.ref2.current.value) || 0;
    const result = val1 + val2;
    this.setState({ data: { t1: val1, t2: val2 }, result });
  };

  resetClicks = (e) => {
    this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    this.ref1.current.value = 0;
    this.ref2.current.value = 0;
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <form className="justify-content-center">
            <fieldset>
              <legend className="text-center">Calculator</legend>
              <div className="form-group mb-1">
                <label className="mb-0" htmlFor="t1">
                  Number One
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="t1"
                  defaultValue={this.state.t1}
                  ref={this.ref1}
                />
              </div>
              <div className="form-group mb-1">
                <label className="mb-0" htmlFor="t2">
                  Number Two
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="t2"
                  defaultValue={this.state.t2}
                  ref={this.ref2}
                />
              </div>
              <div className="form-group mb-2 mt-2">
                <h3>Result: {this.state.result}</h3>
              </div>
              <div className="d-grid gap-2 mx-auto">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleClick}
                >
                  Add
                </button>
                <button
                  type="reset"
                  className="btn btn-primary"
                  onClick={this.resetClicks}
                >
                  Reset
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

class CalculatorAssignment extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default CalculatorAssignment;
