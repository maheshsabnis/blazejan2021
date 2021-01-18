// 1. import React Object Model and the Component

import React, {Component} from 'react';

// 2. create a component class

class FirstComponent extends Component {

    // 2.a. adding the constructor for receivind props

    constructor(props){
        super(props);
    }


    // 2.b. the render method that contaains the HTML UI
    // to be rendered
    // it can have only-one top level element
    // the render() method using props
    render(){
        return(
            <div>
                <h2>The First React Component!!!!!! {this.props.msg}  {this.props.newmsg}</h2>
            </div>
        )
    }
}
// 3. exporting the component so that
// it can be impprted for either reusability in other component or mounting
export default FirstComponent;