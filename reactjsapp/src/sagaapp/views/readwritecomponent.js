import React from 'react';

const ReadWriteComponent=()=>{
    return(
        <div className="container">
            <input type="button" value="Get Data" className="btn btn-warning"/>
            <hr/>
            <input type="button" value="Save Data" className="btn btn=success"/>
        </div>
    );
};
export default ReadWriteComponent;