import Layout from '../components/Layout'
import {getProductById} from '../lib/moltim'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'

//pega a props, id da pagina, para separar entre itens
const ProductPage = ({product}) => (
    <Layout title={product.name}>    
        <ProductSummary {...product}/>
        <ProductAttributes {...product}/>
    </Layout>
)

//filtra as informações do id para aquele item
ProductPage.getInitialProps = async ({query: {id}}) => {
    //included para passar tambem o parametro da imagem
    const {data, included:{ main_images }} = await getProductById(id)
    
    //ternario, se existir um ID, eu o pego, senão, retorno falso
    const imageId = data.relationships.main_image ? 
                        data.relationships.main_image.data.id : 
                        false
    
    return{
        product: {
            ...data,
            image: imageId ? 
                    main_images.find(img => img.id === imageId).link.href : 
                        '/static/rajadoufc.jpg'

        }
    }
}

export default ProductPage;