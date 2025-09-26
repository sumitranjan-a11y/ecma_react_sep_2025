import CounterAssignment from '../1_assignment/CounterAssignment';
import CounterWithReducer from '../2_reducers/CounterWithReducer';
import CounterWithContext from '../3_context/CounterWithContext';
import ControlledVsUncontrolledComponent from '../4_controlled-uncontrolled/ControlledVsUncontrolledComponent';
<<<<<<< HEAD
import CalculatorAssignment from '../5_assignment/CalculatorAssignmentMine';
=======
import CalculatorAssignment from '../5_assignment/CalculatorAssignment';
<<<<<<< HEAD
>>>>>>> 77deb00a28b569455a56681f201a7b42911db655
=======
import ErrorHandler from '../common/ErrorHandler';
>>>>>>> 3d8723e626afa73db5c794eca4a6eb8306bc1509

const RootComponent = () => {
    return (
        <ErrorHandler>
            <div className='container'>
                {/* <CounterAssignment /> */}
                {/* <CounterWithReducer /> */}
                {/* <CounterWithContext /> */}
                <ControlledVsUncontrolledComponent />
                <hr />
                <CalculatorAssignment />
            </div>
        </ErrorHandler>
    );
};

export default RootComponent;