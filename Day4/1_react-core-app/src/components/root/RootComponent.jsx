import CounterAssignment from '../1_assignment/CounterAssignment';
import CounterWithReducer from '../2_reducers/CounterWithReducer';
import CounterWithContext from '../3_context/CounterWithContext';
import ControlledVsUncontrolledComponent from '../4_controlled-uncontrolled/ControlledVsUncontrolledComponent';
import CalculatorAssignment from '../5_assignment/CalculatorAssignmentMine';
import CalculatorAssignment from '../5_assignment/CalculatorAssignment';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <ErrorHandler>
            <div className='container'>
                {/* <CounterAssignment /> */}
                {/* <CounterWithReducer /> */}
                {/* <CounterWithContext /> */}
                <ErrorHandler>
                    <ControlledVsUncontrolledComponent />
                </ErrorHandler>
                <hr />
                <CalculatorAssignment />
            </div>
        </ErrorHandler>
    );
};

export default RootComponent;