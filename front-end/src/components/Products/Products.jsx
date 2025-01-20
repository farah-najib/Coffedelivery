import ProductPlaceholder from 'assets/product-placeholder.png'

 import{OurProducts ,
 ComponentTitle ,
 ProductList ,
 ProductItem,
 Image ,
 Description,
 Price ,
 Name ,Detail } from "./Products.styles"

 const Products = () => {
     const product = {
        id: 'expressoCoffee',
        name: 'Expresso Coffee',
        description:
            'Lorem ipsum dolor sit amet consectetur. Acondiment mi velit imperdiet cras cras in',
        price: 9.99,
        currency: 'USD',
        quantity: 6
    }
    return (
        <OurProducts id="menu">
            <ComponentTitle>#Our products</ComponentTitle>

            <ProductList>
                {Array.from({ length: product.quantity }).map((_, index) => (
                    <ProductItem key={`${product.id}-${index}`}>
                        <Image src={ProductPlaceholder} alt={product.name} />
                        <Description>
                            <Name>{product.name}</Name>
                            <Detail>{product.description}</Detail>
                        </Description>
                        <Price>{`$${product.price.toFixed(2)}`}</Price>
                    </ProductItem>
                ))}
            </ProductList>
        </OurProducts>
    )
}

export default Products
