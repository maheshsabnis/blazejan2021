import React from 'react';

const ListDataComponent=({departments})=>
    departments?(
        <div className="container">
      {
          JSON.stringify(departments)
      }
    </div>):null
export default ListDataComponent;
