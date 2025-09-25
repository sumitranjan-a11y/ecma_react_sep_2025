// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0, flag: false };
//         this.clickCount = 0;
//         this.inc = this.inc.bind(this);
//         this.dec = this.dec.bind(this);
//         this.reset = this.reset.bind(this);
//     }

//     manageClickCount() {
//         this.clickCount++;
//         if (this.clickCount > 9) {
//             this.setState({ flag: true });
//         }
//     }

//     inc() {
//         this.setState({ count: this.state.count + this.props.interval }, () => {
//             this.manageClickCount();
//         });
//     }

//     dec() {
//         this.setState({ count: this.state.count - this.props.interval }, () => {
//             this.manageClickCount();
//         });
//     }

//     reset() {
//         this.clickCount = 0;
//         this.setState({ count: 0, flag: false });
//     }

//     render() {
//         return (
//             <>
//                 <div className="text-center">
//                     <h3 className="text-info">Counter Component</h3>
//                 </div>
//                 <div className="d-grid gap-2 mx-auto col-6">
//                     <input type="text" className="form-control form-control-lg" value={this.state.count} />
//                     <button className="btn btn-info" disabled={this.state.flag} onClick={this.inc}>
//                         <span className='fs-4'>+</span>
//                     </button>
//                     <button className="btn btn-info" disabled={this.state.flag} onClick={this.dec}>
//                         <span className='fs-4'>-</span>
//                     </button>
//                     <button className="btn btn-secondary" disabled={!this.state.flag} onClick={this.reset}>
//                         <span className='fs-4'>Reset</span>
//                     </button>
//                 </div>
//             </>
//         );
//     }
// }

// Counter.propTypes = {
//     interval: PropTypes.number
// }

// Counter.defaultProps = {
//     interval: 1
// }

// class CounterAssignment extends Component {
//     render() {
//         return (
//             <div>
//                 <Counter />
//                 <hr />
//                 <Counter interval={10} />
//             </div>
//         );
//     }
// }

// export default CounterAssignment;

import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ interval }) => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    const clickCount = useRef(0); // Replaces this.clickCount

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            setFlag(true);
        }
    }, []);

    const inc = useCallback(() => {
        setCount(prev => prev + interval);
        manageClickCount();
    }, [interval, manageClickCount]);

    const dec = useCallback(() => {
        setCount(prev => prev - interval);
        manageClickCount();
    }, [interval, manageClickCount]);

    const reset = useCallback(() => {
        clickCount.current = 0;
        setCount(0);
        setFlag(false);
    }, [interval, manageClickCount]);

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
                    readOnly
                />
                <CounterControls flag={flag} inc={inc} dec={dec} reset={reset} />
            </div>
        </>
    );
};

const CounterControls = React.memo(({ flag, inc, dec, reset }) => {
    console.log("Counter Controls Rendered...");

    return (
        <>
            <button className="btn btn-info" disabled={flag} onClick={inc}>
                <span className="fs-4">+</span>
            </button>
            <button className="btn btn-info" disabled={flag} onClick={dec}>
                <span className="fs-4">-</span>
            </button>
            <button className="btn btn-secondary" disabled={!flag} onClick={reset}>
                <span className="fs-4">Reset</span>
            </button>
        </>
    );
});

Counter.propTypes = {
    interval: PropTypes.number,
};

Counter.defaultProps = {
    interval: 1,
};

const CounterAssignment = () => {
    return (
        <div>
            <Counter />
            <hr />
            <Counter interval={10} />
        </div>
    );
};

export default CounterAssignment;
