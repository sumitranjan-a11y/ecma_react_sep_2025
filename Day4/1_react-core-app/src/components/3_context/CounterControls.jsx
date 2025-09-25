import React from 'react';

export const CounterControls = React.memo(({ flag, inc, dec, reset }) => {
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