import React, { Component } from 'react';
class GridComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dataSource: this.props.DataSource,
            tableColumnHeaders: Object.keys(this.props.DataSource[0])
        };
    }

    rowClick=(e)=>{
        // the props function
        // accept the selected row value when the
        if(e !== undefined) {
            this.props.emitSelectedRow(e);

        }   
    }
    render() { 
         if(this.state.dataSource === undefined || this.state.dataSource.length == 0 ){
             return (<div>No Records</div>);
         } else {
             return(
                 <div>
                 <h2>Grid Component</h2>
                 <table className="table table-bordered table-striped table-danger">
                   <thead>
                        <tr>
                          {
                              this.state.tableColumnHeaders.map((col,idx)=>(
                                  <th key={idx}>{col}</th>
                              ))
                          }
                        </tr>
                   </thead>
                   <tbody>
                        {
                            this.state.dataSource.map((row,index)=>(
                                <tr key={index} onClick={()=>this.rowClick(row)}>
                                   {
                                       this.state.tableColumnHeaders.map((col,idx)=>(
                                           <td key={idx}>{row[col]}</td>
                                       ))
                                   } 
                                   <td hidden={!this.props.canDelete}>
                                     <input type="button" value="delete" />
                                   </td>
                                </tr>
                            ))
                        }  
                   </tbody>
                 </table>
                 </div>
             );
         }
    }
}
 
export default GridComponent;