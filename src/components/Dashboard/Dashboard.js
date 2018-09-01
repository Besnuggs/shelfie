import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)      
    }



render(props){
let product = []
product.push(this.props.InventoryList);
let productName = product[0][0].Name
let productPrice = product[0][0].Price
let productImage = product[0][0].Image


    return(
        <div>
            <Product 
               productName={productName} 
               productPrice={productPrice}
               productImage={productImage}
               />
        </div>
    )
}
}

export default Dashboard;