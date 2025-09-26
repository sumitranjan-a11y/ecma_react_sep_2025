import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/error.png');
            return (
                <div className="text-center mt-5">
                    <h2 className="text-danger mb-5">Something went wrong, please contact admin</h2>
                    <img src={errImg} alt="Error" className='img-thumbnail' />
                </div>
            );
        } else {
            return this.props.children || <h2 className='text-warning'>No Component to render</h2>
        }
    }

    componentDidCatch(error, info) {
        // You can log the error to an error loggng service  
    }

    static getDerivedStateFromError(error) {
        // Update the state so that the next render wll show a fallback UI
        return { hasError: true };
    }
}

export default ErrorHandler;