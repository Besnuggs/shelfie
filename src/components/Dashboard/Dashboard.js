import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)      
    }



render(props){
let product = []
product.push(this.props.InventoryList);
console.log(product)
console.log(this.props.InventoryList)
    return(
        <div>
            <Product 
               product={this.product} />
        </div>
    )
}
}

export default Dashboard;