import ListRoot from '../1_working_with_arrays/ListComponent';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <ErrorHandler>
            <div className='container'>
                <ListRoot />
            </div>
        </ErrorHandler>
    );
};

export default RootComponent;