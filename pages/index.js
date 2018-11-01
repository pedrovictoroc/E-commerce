import { getProducts } from '../lib/moltim'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const Home = (props) => (
    <Layout title="Home">
        <ProductList {...props}/>
    </Layout>
)

Home.getInitialProps = async () => {
    const {data, included: { main_images }}= await getProducts()

    const products = data.map((product) => {
        //ternario, se existir um ID, eu o pego, senão, retorno falso
        const imageId = product.relationships.main_image ? product.relationships.main_image.data.id : false
    
    return {
        ...product,
        image: imageId ? main_images.find(img => img.id === imageId).link.href : '/static/rajadoufc.jpg'
    };    
    
    })

    return{
        products
    }
}

export default Home;