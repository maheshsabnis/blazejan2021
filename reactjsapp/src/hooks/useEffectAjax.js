import React, {useEffect, useState} from 'react';
import { HttpSrevice } from "./../services/httpservice";

const UseEffectAjaxComponent=()=>{

    const [depts, addDept] = useState([]);

    const serv = new HttpSrevice();

   
    useEffect(()=>{
        serv.getData().then((response)=>{
            // data will be added in array
            addDept(response.data);
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]); // --> empty array reprsents all state properties for the current component


    return(
        <div className="container">
        <h2>Use Effect for Ajax call during the component loading</h2>
            {JSON.stringify(depts)}    
        </div>
    );
};

export default UseEffectAjaxComponent;
