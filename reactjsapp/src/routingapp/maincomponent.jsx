import React, { Component } from 'react';
import ListDepartmentComponent from './listdeptcomponent';
import CreateDepartmentComponent from './createdeptcomponent';
import EditDepartmentComponent from './editdeptcomponent';
// import the routing
import { Route, Link, Switch, Redirect } from "react-router-dom";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
              <h2>The React.js Routing App</h2>

              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <td>
                    {/* Define route links so that correctponding componenent will be loaded */}
                      <Link to="/">List Department</Link>
                    </td>
                    <td>
                    <Link to="/create">Create Department</Link>
                  </td>
                  
                  </tr>
                </tbody>
              </table>

              {/* Defining The Route Table */}
              <Switch>
                <Route exact path="/" component={ListDepartmentComponent}></Route>
                <Route exact path="/create" component={CreateDepartmentComponent}></Route>
                {/* the route parameter */}
                <Route exact path="/edit/:id" component={EditDepartmentComponent}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </div>
        );
    }
}
 
export default MainComponent;