import notFound from "app/(shop)/category/not-found";
import { products } from "app/(shop)/page";
import { titleFont } from "config/fonts";
import { initialData } from "seed/seed";
import { MobileSlideShow, QuantitySelector, SizeSelector, SlideShow } from "@/components/index";

interface Props {
  params: {
    slug: string;
  }
}

export default function({ params }: Props) {
const { slug } = params;
const product = initialData.products.find( product => product.slug === slug);

if ( !product ) {
  notFound();
}

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      
      {/* Slideshow Mobile */}
      <MobileSlideShow
      title={product.title}
      images={product.images}
      className="block md:hidden"
      />
      

      {/* Slideshow Desktop */}
      <SlideShow 
      title={ product .title }
      images={ product.images }
      className="hidden md:block"
      />


      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={`${ titleFont.className } antialiazed font-bold text-xl`}>
          { product.title }
        </h1>

        <p className="text-lg mb-5">${ product.price }</p>

        {/* Selector de size */}
        <SizeSelector
          selectedSize={ product.sizes[0] }
          availableSizes={ product.sizes }
        />

        {/* Selector de catidad */}
        <QuantitySelector
         quantity={ 2 } />


        {/* Button */}
        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">
          { product.description }
        </p>

      </div>

    </div>
  );
}    