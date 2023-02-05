import React from "react";

const Product = (props) => {
    return(
        <div className="product">
            <p>Using Functional Component</p>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img className="product-image" src={props.image} alt={props.name} />
            <h3>${props.price}</h3>
        </div>
    )
}

export default Product