import React, { useState } from 'react';

import { Counter } from './Counter';

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
        <div className='mt-5'>
            {message && <h2 className='text-center'>{message}</h2>}
            <Counter onMax={updateMessage} />
        </div>
    );
};

export default CounterWithContext;
