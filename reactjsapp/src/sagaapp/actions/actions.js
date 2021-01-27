// read action
export const getDepartments=()=>{
    console.log('get departments accesseds');
    return {
        type: 'GET_DEPARTMENTS'
    };
};

// write
export const saveDepartment=(department)=>{
    return {
        type: 'ADD_DEPARTMENT',
        payload: department
    };
};