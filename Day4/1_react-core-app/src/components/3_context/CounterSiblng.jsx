import React, { useCallback, useRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CounterControls } from './CounterControls';
import { useCounter } from './CounterContext';

export const CounterSibling = React.forwardRef(({ interval = 1, onMax }, ref) => {
    const {state, dispatch} = useCounter();

    const clickCount = useRef(0);

    useEffect(() => {
        onMax(state.flag);
    }, [state.flag, onMax])

    const manageClickCount = useCallback(() => {
        clickCount.current++;
        if (clickCount.current > 9) {
            dispatch({ type: 'SETFLAG', payload: true });
        }
    }, []);

    const inc = useCallback(() => {
        dispatch({ type: 'INCREMENT', payload: interval });
        manageClickCount();
    }, [interval, manageClickCount]);

    const dec = useCallback(() => {
        dispatch({ type: 'DECREMENT', payload: interval });
        manageClickCount();
    }, [interval, manageClickCount]);

    const reset = useCallback(() => {
        clickCount.current = 0;
        dispatch({ type: 'RESET' });
    }, [interval, manageClickCount]);

    useImperativeHandle(ref, () => {
        return { reset };
    });

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    value={state.count}
                    readOnly
                />
                <CounterControls flag={state.flag} inc={inc} dec={dec} reset={reset} />
            </div>
        </>
    );
});

CounterSibling.propTypes = {
    interval: PropTypes.number,
};