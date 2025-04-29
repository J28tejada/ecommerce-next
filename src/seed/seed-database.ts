import { initialData } from "./seed";
import { Size } from "@prisma/client";
import prisma from '../lib/prisma';


async function main() {

// 1. Borrar registros previos
  // await Promise.all( [
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    // ]); 

    const{ categories, products } = initialData;
    
    const categoriesData = categories.map( (name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData
    });
    
    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce( (map, category) => {
        map[ category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); //string=iphones, string=categoryID

    console.log(categoriesMap);
    //productos
    
    await Promise.all(products.map( async(product) => {
        const { type, images, sizes, ...rest } = product;

        const sizeMap: Record<string, string> = {
            "64GB": "GB64",
            "128GB": "GB128",
            "256GB": "GB256",
            "512GB": "GB512",
            "13-inch": "INCH_13",
            "15-inch": "INCH_15",
            "17-inch": "INCH_17",
            "Standard": "Standard",
            "Digital": "Digital",
        }; 

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                sizes: sizes.map(size => Size[sizeMap[size] as keyof typeof Size]),
                categoryId: categoriesMap[type.toLocaleLowerCase()],
                //categoryId: categoriesMap[type]
            }
        })

        // Images
        const imagesData = images.map( image => ({
            url: image,
            productId: dbProduct.id
        }));
  
        await prisma.productImage.createMany({
            data: imagesData
        });
  
    }));    



    console.log('seed ejecutado correctamente')
}



( () => {

    if ( process.env.NODE_ENV === 'production' ) return;
  
  
    main();
  } )();