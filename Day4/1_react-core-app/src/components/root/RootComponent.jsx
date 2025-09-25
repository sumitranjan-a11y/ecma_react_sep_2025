import CounterAssignment from '../1_assignment/CounterAssignment';
import CounterWithReducer from '../2_reducers/CounterWithReducer';
import CounterWithContext from '../3_context/CounterWithContext';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <CounterAssignment /> */}
            {/* <CounterWithReducer /> */}
            <CounterWithContext />
        </div>
    );
};

export default RootComponent;