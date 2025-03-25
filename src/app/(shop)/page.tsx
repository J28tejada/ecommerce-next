import {  ProductGrid, Title } from 'components'
import { initialData } from 'seed/seed';

export const products = initialData.products 

export default function Home() {
    return (
      <>
        <Title
        title='Tienda'
        subtitle='Todos los productos'
        className='mb-1 ml-4' 
        />

        <ProductGrid
        products={products}
        />
      </>
    );
  };