import React, { useEffect, useState } from 'react'

const Product = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null) 
    const [products, setProducts] = useState([])

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>
            {
                setCategories(json)
                console.log(json)
            }
            
            )
    }

    
    
    const handleSelectedCategory = (e) => {
        const catg = e.target.value
        console.log(catg)
        setSelectedCategory(catg)
    }
    
    const getProductByCategory = () => {
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json)
                setProducts(json)
            })
    }
    
    useEffect(() => {
        getCategories()
    }, [])


    useEffect(() => {
        if(selectedCategory){
             getProductByCategory()
        }
    }, [selectedCategory])

  return (
    <div>
        <select name="category" id="ctg" onChange={handleSelectedCategory}>
            {categories.map((category) => <option key={category} value={category}>{category}</option> )}
        </select>
        <section>
            <h1>{selectedCategory}</h1>
            <section>
                {products.map(({id, price, image, description}) => {
                    return(
                        <div key={id}>
                            <img src={image} alt={id} />
                            <p>{description}</p>
                            <p>Prices - {price}</p>
                        </div>
                    )
                })}
            </section>
        </section>
       
    </div>
  )
}

export default Product