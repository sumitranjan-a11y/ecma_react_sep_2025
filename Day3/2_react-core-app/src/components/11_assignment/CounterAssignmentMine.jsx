import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            clicks: 0
        };
        this.interval = typeof props.interval === 'number' ? props.interval : 1;
    }

    handleIncrement = () => {
        const { count, clicks } = this.state;
        if (clicks < 10) {
            this.setState({
                count: count + this.interval,
                clicks: clicks + 1
            });
        }
    };

    handleDecrement = () => {
        const { count, clicks } = this.state;
        if (clicks < 10) {
            this.setState({
                count: count - this.interval,
                clicks: clicks + 1
            });
        }
    };

    handleReset = () => {
        this.setState({ count: 0, clicks: 0 });
    };

    handleInputChange = (e) => {
        const num = Number(e.target.value);
        if (!isNaN(num)) {
            this.setState({ count: num });
        }
    };

    render() {
        const { count, clicks } = this.state;
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        value={count}
                        onChange={this.handleInputChange}
                        placeholder="0"
                    />
                    <button
                        className="btn btn-info"
                        onClick={this.handleIncrement}
                        disabled={clicks >= 10}
                    >
                        <span className="fs-4">+</span>
                    </button>
                    <button
                        className="btn btn-info"
                        onClick={this.handleDecrement}
                        disabled={clicks >= 10}
                    >
                        <span className="fs-4">-</span>
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={this.handleReset}
                        disabled={clicks < 10}
                    >
                        <span className="fs-4">Reset</span>
                    </button>
                </div>
            </>
        );
    }
}

class CounterAssignment extends Component {
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

export default CounterAssignment;