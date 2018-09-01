import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

class App extends Component {
constructor(props){
  super(props)
    this.state={
      InventoryList:[
        {Name: 'What',
        Price: 0,
        Image: ''}
      ]
    }
}

componentDidMount(){
  axios.get('/api/inventory/').then((res)=>{
    this.setState({InventoryList: res.data})
  })
}


addToInv(product_name, product_price, product_image){
    axios.post('/api/products', {
      product_name: product_name,
      product_price: product_price,
      product_image: product_image
    })
      .then((res) => this.setState({InventoryList: res.data}))
  }


  render(props) {
    return (
      <div className="App">
      <Dashboard
        InventoryList={this.state.InventoryList}/>
      <Form
      Get={this.componentDidMount}
      />
      <Header/>
      {/* <Product/> */}

      
      </div>
    );
  }
}

export default App;
