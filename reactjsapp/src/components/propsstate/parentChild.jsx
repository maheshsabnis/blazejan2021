import React, { Component } from 'react';
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <div>
                <h2>The Parent Component</h2>
                <ChildComponent message="Hi Child Component"></ChildComponent>
                <br/>
                <Child1Component message="Hi Child 1 Component"></Child1Component>
            </div>
        );
    }
}

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <div>
                <h2>The Child Component</h2>
                <strong>
                  Value Received from Parent : {this.props.message}
                </strong>
            </div>
        );
    }
}

class Child1Component extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
            <div>
                <h2>The Child Component</h2>
                <strong>
                  Value Received from Parent : {this.props.message}
                </strong>
            </div>
        );
    }
}
 

 
export default ParentComponent;