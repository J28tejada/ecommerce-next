import { Title, ProductGrid } from '@/components/index';
import { products } from 'app/(shop)/page';
import { Type } from 'interfaces';
import { notFound } from 'next/navigation';
import { initialData } from 'seed/seed';

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Type; 
  }
}

export default function({params }: Props) {  

  const { id } = params;
  const products = seedProducts.filter(product => product.type === id);

const labels: Record<Type, string> = {   
  'iphone': 'Smartphones',
  'laptop': 'Laptops',
  'console': 'Consolas'
}

  /*if (id === "console") {
    notFound();
  } */
    return ( 
      <>
        <Title
        title={`Pantalla de ${( labels )[id]}`}
        subtitle='Todos los productos'
        className='mb-2' 
        />

        <ProductGrid
        products={products}
        />
      </>
    )
}   