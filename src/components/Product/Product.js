import React from 'react'

const Product = (props) => {

    return(
        <div>
            <p>Product</p>
            <img src={props.productImage} />
            <h1>{props.productName} </h1>
            <h1>{props.productPrice}</h1>
        </div>
    )
}

export default Product;