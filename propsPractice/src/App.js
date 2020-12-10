import React from 'react'
import Item from './components/Item'
import products from './components/products'

function App(){
    const productItems = products.map(function(product){
        return <Item key={product.id} item={product}/>
    })
    return(
        <div>
            {productItems}
        </div>
    )       
}

export default App