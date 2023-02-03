import React, { Component } from 'react';

export default class Products extends Component {
    
    constructor(){
        super();
        this.state = {
            categories : [],
            products : [],
            selectedCategory : null
        }
    }

    
    componentDidMount(){
        this.getAllCategory()
    }

    componentWillUnmount(){

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log({prevProps, prevState, snapshot})
        if(this.state.selectedCategory !== prevState.selectedCategory){
            this.getSelectedProducts()
        }
        
    }
    
    getAllCategory(){
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.setState({
                    categories : json
                })
            })
    }

    getSelectedProducts(){
        fetch(`https://fakestoreapi.com/products/category/${this.state.selectedCategory}`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.setState({products : json})
            })
    }

    handleSelectedCategory = (e) => {
        this.setState({selectedCategory : e.target.value})
    }
  
    render() {
    return (
      <>
        <h1>🎉 Class Based Component</h1>
        <select name="categories" id="categories" onChange={this.handleSelectedCategory}>
            {this.state.categories.map((category) => (
                <option className='option' value={category} id={category}>{category.toUpperCase()}</option>
            ))}
        </select>
        <section>
            {this.state.products.map((product) => (
                <section>
                    <h4>{product.title}</h4>
                    <img className='product-image' src={product.image} alt={product.title} />
                    <h2>${product.price}</h2>
                </section>
            )
            )}
        </section>
        
      </>
    )
  }
}
