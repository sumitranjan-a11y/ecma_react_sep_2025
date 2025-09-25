import CounterAssignment from '../1_assignment/CounterAssignment';
import CounterWithReducer from '../2_reducers/CounterWithReducer';
import CounterWithContext from '../3_context/CounterWithContext';
import ControlledVsUncontrolledComponent from '../4_controlled-uncontrolled/ControlledVsUncontrolledComponent';
import CalculatorAssignment from '../5_assignment/CalculatorAssignmentMine';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <CounterAssignment /> */}
            {/* <CounterWithReducer /> */}
            {/* <CounterWithContext /> */}
            {/* <ControlledVsUncontrolledComponent /> */}
            <CalculatorAssignment />
        </div>
    );
};

export default RootComponent;