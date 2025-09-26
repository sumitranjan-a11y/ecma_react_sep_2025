<<<<<<< HEAD
import ListRootMine from '../2_assignment_mine/ListRootMine';
=======
import ListRoot from '../1_working_with_arrays/ListComponent';
import CrudAssignment from '../2_assignment/CrudAssignment';
>>>>>>> 4ac0c9241644222f7a56c0cfd21bd01fcb79fa5b
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
<<<<<<< HEAD
        <div className='container'>
                <ListRootMine />
        </div>
=======
        <ErrorHandler>
            <div className='container'>
                {/* <ListRoot /> */}
                <CrudAssignment />
            </div>
        </ErrorHandler>
>>>>>>> 4ac0c9241644222f7a56c0cfd21bd01fcb79fa5b
    );
};

export default RootComponent;