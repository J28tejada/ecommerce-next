import { initialData } from "./seed";
import { prisma } from '../lib/prisma'


async function main(){


    // Borrar registros previos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]); 

    const{ categories, products } = initialData;
    // Categorias
   // await prisma.category.create({
     //   data:{
       //     name: 'iphone',
       // }
    //})
    const categoriesData = categories.map( (name) => ({ name }));

    await prisma.category.createMany({
        data: categoriesData
    });
    

    console.log('seed ejecutado correctamente')
}


(() => {
    if (process.env.NODE_ENV === 'production') return
    main();
})();