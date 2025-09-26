import React, { Component, useState } from 'react';
import TextInput from '../common/TextInput';
import ErrorHandlerHOC from '../common/ErrorHandlerHOC';

class CalculatorOne extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.t1 = React.createRef();
        this.t2 = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.t1.current.value) + parseInt(this.t2.current.value) });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center">
                        <fieldset>
                            <legend className="text-center">Calculator One - Uncontrolled</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1" ref={this.t1} defaultValue={this.state.data.t1} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2" ref={this.t2} defaultValue={this.state.data.t2} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

class CalculatorTwo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    handleChange1(e) {
        var obj = { ...this.state.data };
        obj.t1 = e.target.value;
        this.setState({ data: obj });
    }

    handleChange2(e) {
        var obj = { ...this.state.data };
        obj.t2 = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center">
                        <fieldset>
                            <legend className="text-center">Calculator Two - Controlled</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1" value={this.state.data.t1} onChange={this.handleChange1} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2" value={this.state.data.t2} onChange={this.handleChange2} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

class CalculatorThree extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    handleChange(e) {
        const field = e.target.id;
        var obj = { ...this.state.data };
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center">
                        <fieldset>
                            <legend className="text-center">Calculator Three - Controlled (Single Change Handler)</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1" value={this.state.data.t1} onChange={this.handleChange} />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2" value={this.state.data.t2} onChange={this.handleChange} />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

class CalculatorFour extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    reset(e) {
        this.setState({ data: { t1: 0, t2: 0 }, result: 0 });
    }

    handleChange(e) {
        const field = e.target.id;
        var obj = { ...this.state.data };
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center">
                        <fieldset>
                            <legend className="text-center">Calculator Four - Composite UI</legend>
                            <TextInput name="t1" label="Number One" placeholder="Enter Number One" value={this.state.data.t1}
                                onChange={this.handleChange} />
                            <TextInput name="t2" label="Number Two" placeholder="Enter Number Two" value={this.state.data.t2}
                                onChange={this.handleChange} />
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: {this.state.result}</h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                                <button type="reset" className="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

const CalculatorFive = () => {
    const [data, setData] = useState({ t1: "0", t2: "0" });
    const [result, setResult] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const n1 = parseFloat(data.t1) || 0;
        const n2 = parseFloat(data.t2) || 0;
        setResult(n1 + n2);
    };

    const reset = () => {
        setData({ t1: "0", t2: "0" });
        setResult(0);
    };

    const handleChange = (e) => {
        const { name, value } = e.target; // prefer name over id
        setData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="text-center">Calculator Five - Composite UI</legend>

                        <TextInput
                            name="t1"
                            label="Number One"
                            placeholder="Enter Number One"
                            value={data.t1}
                            onChange={handleChange}
                        />

                        <TextInput
                            name="t2"
                            label="Number Two"
                            placeholder="Enter Number Two"
                            value={data.t2}
                            onChange={handleChange}
                        />

                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {result}</h3>
                        </div>

                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success">
                                Add
                            </button>
                            <button type="button" className="btn btn-primary" onClick={reset}>
                                Reset
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const CalculatorAssignment = () => {
    throw new Error("Some Error");
    return (
        <div>
            {/* <CalculatorOne /> */}
            {/* <CalculatorTwo /> */}
            {/* <CalculatorThree /> */}
            {/* <CalculatorFour /> */}
            <CalculatorFive />
        </div>
    );
}

// export default ErrorHandlerHOC(CalculatorAssignment);
export default CalculatorAssignment;
