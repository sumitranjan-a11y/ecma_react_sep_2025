import CounterAssignment from '../1_assignment/CounterAssignment';
import CounterWithReducer from '../2_reducers/CounterWithReducer';
import CounterWithContext from '../3_context/CounterWithContext';
import ControlledVsUncontrolledComponent from '../4_controlled-uncontrolled/ControlledVsUncontrolledComponent';
<<<<<<< HEAD
import CalculatorAssignment from '../5_assignment/CalculatorAssignmentMine';
=======
import CalculatorAssignment from '../5_assignment/CalculatorAssignment';
>>>>>>> 77deb00a28b569455a56681f201a7b42911db655

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