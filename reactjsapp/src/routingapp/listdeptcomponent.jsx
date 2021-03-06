import React, { Component, Fragment } from 'react';
import { HttpSrevice } from "./../services/httpservice";
import { Link } from "react-router-dom";
class ListDepartmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            departments:[]
        };
        this.serv = new HttpSrevice();
    }
     // subscribe to the HttpService to receive the data
     componentDidMount(){
        this.serv.getData().then((resp)=>{
            this.setState({departments:resp.data.response});
        }).catch((error)=>{
            this.setState({errorMessage: `Error Occured ${error.message}`});
        });
    }

    componentWillUnmount(){
        console.log('List Component is UnMounted');
    }

    deleteRecord(id){
        this.serv.deleteData(id).then((resp)=>{
            console.log('Deleted');
            // reload the window
            window.location.reload();
        }).catch((error)=>{
             console.log(`Error in Delete ${error}`);   
        });
    }
    render() { 
        if(this.state.departments.length === 0) {
           return( <div>No recodrs</div>);
        } else {
        return (  
            <div className="container">
             <h2>List of Departments</h2>
             <Fragment>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>DeptNo</th>
                    <th>DeptName</th>
                    <th>Location</th>
                    <th>Capacity</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                      this.state.departments.map((d,i)=>(
                          <tr key={i}>
                             <td>{d.DeptNo}</td>
                             <td>{d.DeptName}</td>
                             <td>{d.Location}</td>
                             <td>{d.Capacity}</td>
                            <td>
                               <button className="btn btn-warning">
                                 <Link to={`/edit/${d.DeptNo}`}>Edit</Link>
                               </button>
                            </td>
                            <td>
                            <input type="button" value="Delete" className="alert alert-danger"
                             onClick={()=> {this.deleteRecord(d.DeptNo)}}/>
                          </td>
                          </tr>
                      ))
                  }
                </tbody>
              </table>
              </Fragment>
            </div>
        );}
    }
}
 
export default ListDepartmentComponent;