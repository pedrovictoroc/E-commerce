import Moltin from '../Moltin/Moltin';

const GetProducts = () => Moltin.Products.All().then((products)=>{
    console.log(products);
});

export default GetProducts;