
import{OurProducts ,
 ComponentTitle ,
 ProductList ,
 ProductItem,
 Image ,
 Description,
 Price ,
 Name ,Detail } from "./Products.styles"

import { API_BASE_URL, fetchProducts } from '../../utils/api'
import { useEffect, useState } from 'react'

 const Products = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
       const getProducts = async () => {
           try {
               const data = await fetchProducts()
               setProducts(data)
           } catch (error) {
               console.error('Failed to fetch posts')
           }
       }

       getProducts()
   }, [])
    return (
        <OurProducts id="menu">
            <ComponentTitle>#Our products</ComponentTitle>

            <ProductList>
                {products.map((product) => (
                    <ProductItem key={product._id}>
                        <Image
                            src={`${API_BASE_URL}${product.image}`}
                            alt={product.name}
                        />
                        <Description>
                            <Name>{product.name}</Name>
                            <Detail>{product.description}</Detail>
                        </Description>
                        <Price>{`${product.price.amount.toFixed(2)}`}</Price>
                    </ProductItem>
                ))}
            </ProductList>
        </OurProducts>
    )
}

export default Products
