import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props)
            this.state={
                product_name: '',
                product_price: 0,
                product_image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
            }
            this.handleCancelClick = this.handleCancelClick.bind(this)
            this.handleAddClick = this.handleAddClick.bind(this)
    }

handleInput = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
     })
 }

handleCancelClick(){
this.setState({product_name: ''})
this.setState({product_price: 0})
this.setState({product_image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'})
}

handleAddClick(){
axios.post('/api/inventory/', {Name: this.state.product_name},{Price: this.state.product_price}, {Image: this.state.product_image}).then((res)=> {
    this.props.Get(res)
    this.handleCancelClick()
})

// this.setState({product_name: ''})
// this.setState({product_price: 0})
// this.setState({product_image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'})
// }
}


render(){
    return(
        <div>
        <h1>Form</h1>
        <img src={this.state.product_image} alt="Product Image Preview" />

        <h1>Image URL:</h1>
        <input onChange={this.handleInput} name='product_image'></input>

        <h1>Product Name:</h1>
        <input value={this.state.product_name}onChange={this.handleInput} name='product_name'></input>

        <h1>Price:</h1>
        <input value={this.state.product_price}onChange={this.handleInput} name='product_price'></input>

        <button onClick={this.handleCancelClick}>Cancel</button>
        
        <button 
        onClick={this.handleAddClick}>Add To Inventory</button>
        </div>
    )
}
}

export default Form;