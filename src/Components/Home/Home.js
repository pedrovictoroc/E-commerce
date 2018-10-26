import React from 'react';
import getProducts from './Components/Moltin/Moltin';

const Home = ({products}) => <pre>{JSON.stringify(products, 't', 2)}</pre>;

Home.getInitialProps = async () => {
    const products = await getProducts()
    return {
        products
    }
};

export default Home;