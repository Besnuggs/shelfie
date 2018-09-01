import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)      
    }



render(props){
// Make sure props is working.
// let {Name, Price, Image} = this.props.InventoryList
let Inventory = this.props.InventoryList.map((Name, Price, Image) => {
    return(
       <h1> Name: {Name} </h1>
    )
});
console.log(Inventory)
console.log(this.props.InventoryList)
    return(
        <div>
            <Product 
            Inventory={Inventory}/>
        </div>
    )
}
}

export default Dashboard;