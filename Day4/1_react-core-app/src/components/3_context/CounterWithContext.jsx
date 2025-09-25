import React, { useState } from 'react';

import { Counter } from './Counter';
import { CounterSibling } from './CounterSiblng';
import { CounterProvider } from './CounterContext';

const CounterWithContext = () => {
    const [message, setMessage] = useState("");

    const updateMessage = (flag) => {
        if (flag) {
            setMessage("Max click reached, please reset to continue...");
        } else {
            setMessage("");
        }
    }

    return (
        <CounterProvider>
            <div className='mt-5'>
                {message && <h2 className='text-center'>{message}</h2>}
                <Counter onMax={updateMessage} />
                <hr />
                <CounterSibling onMax={updateMessage} />
            </div>
        </CounterProvider>
    );
};

export default CounterWithContext;
