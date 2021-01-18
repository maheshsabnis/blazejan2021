import React, { Component } from 'react'

class StateComponent extends Component {
    constructor(props) {
        super(props);
        // declaring the local state properties 
        this.state = { 
            firstName: '',
            middleName: '',
            lastName: '',
            fullName: ''
        };
    }

    
   
    handleChangeForAllInputs=(evt)=>{
        // evt.target.name, read the name of the element being
        // updated with event and read the value and update it in state property.
        // evt.target.name, represent the name of the 'state' property 
        this.setState({[evt.target.name]: evt.target.value});
    }


    clear=()=>{
        this.setState({firstName: ''});
        this.setState({middleName: ''});
        this.setState({lastName: ''});
    }

    save=()=>{
        this.setState({fullName: `${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`});
    }
    // {this.handleFirstNamChange.bind(this)}, bind the method to UI element

    render() { 
        return (  
            <div>
              <h2>The Local State for the Component</h2>
              <div>
                <label>First Name</label>
                <input type="text" value={this.state.firstName}
                name="firstName"
                 onChange={this.handleChangeForAllInputs.bind(this)}/>
              </div>
              <div>
                <label>Middle Name</label>
                <input type="text" value={this.state.middleName}
                name="middleName"
                onChange={this.handleChangeForAllInputs.bind(this)}/>
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" value={this.state.lastName}
                name="lastName"
                onChange={this.handleChangeForAllInputs.bind(this)}/>
              </div>
              <div>
                 <input type="button" value="Clear"
                  onClick={this.clear.bind(this)}/>
                 <input type="button" value="Save"
                  onClick={this.save.bind(this)}/>
              </div>
              <hr/>
              {/* Printing values entered by end-user in the UI */}
              {`${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`}
              <hr/>
               <div>
                <strong>{this.state.fullName}</strong>
               </div>
            </div>
        );
    }
}
 
export default StateComponent;