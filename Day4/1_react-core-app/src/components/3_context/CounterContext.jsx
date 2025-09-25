import React, { useContext, useReducer } from 'react';

import { counterReducer, initialState } from "./counter-reducer";

const CounterContext = React.createContext();

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

// Custom Hook
export const useCounter = () => {
    const context = useContext(CounterContext);

    if(context === undefined) {
        throw new Error("useCounter must be used with Counter Provider")
    }

    return context;
}