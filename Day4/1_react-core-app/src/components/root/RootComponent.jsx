import CounterAssignment from '../1_assignment/CounterAssignment';
import CounterWithReducer from '../2_reducers/CounterWithReducer';
import CounterWithContext from '../3_context/CounterWithContext';
import ControlledVsUncontrolledComponent from '../4_controlled-uncontrolled/ControlledVsUncontrolledComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <CounterAssignment /> */}
            {/* <CounterWithReducer /> */}
            {/* <CounterWithContext /> */}
            <ControlledVsUncontrolledComponent />
        </div>
    );
};

export default RootComponent;