// read action
export const getDepartments=()=>{
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