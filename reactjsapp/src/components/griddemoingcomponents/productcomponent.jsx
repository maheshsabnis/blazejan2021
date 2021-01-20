import React, { Component } from 'react'
import GridComponent from './../reusablecomponents/gridComponent';
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            products: [
                 {ProductId:101, ProductName:'P1'},   
                 {ProductId:102, ProductName:'P2'},   
                 {ProductId:103, ProductName:'P3'}
            ],
            categories: [
                {Id:101, Name:'C1'},   
                {Id:102, Name:'C2'},   
                {Id:103, Name:'C3'}
           ],
        };
    }
    getValue=(p)=>{
        alert(`Selected Products ${JSON.stringify(p)}`);
    }
    render() { 
        return ( 
            <div className="container">
                <GridComponent DataSource={this.state.products}
                 canDelete={true}
                 emitSelectedRow={this.getValue.bind(this)}></GridComponent>
                <hr/>
                <GridComponent DataSource={this.state.categories}></GridComponent>
            </div>
         );
    }
}
 
export default ProductComponent;