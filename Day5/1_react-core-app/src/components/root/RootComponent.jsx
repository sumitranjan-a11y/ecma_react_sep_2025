import ListRootMine from '../2_assignment_mine/ListRootMine';
import ListRoot from '../1_working_with_arrays/ListComponent';
import CrudAssignment from '../2_assignment_mine/CrudAssignment'
import HookFormsDemo from '../3_hook-forms/HookFormsDemo';
import AjaxComponent from '../4_ajax/AjaxComponent';
import ErrorHandler from '../common/ErrorHandler';

const RootComponent = () => {
    return (
        <ErrorHandler>
            <div className='container'>
                {/* <ListRoot /> */}
                {/* <CrudAssignment /> */}
                {/* <HookFormsDemo /> */}
                <AjaxComponent />
            </div>
        </ErrorHandler>
    );
};

export default RootComponent;