import Layout from '../components/Layout'
import {getCartItems, removeFromCart} from '../lib/moltim'
import CartItemList from '../components/CartItemList'
import CartSummary from '../components/CartSummary'
export default class Cart extends React.Component{
    state = {
        items: [],
        loading:true
    }

    async componentDidMount(){
        const cartId = await localStorage.getItem('mcart')
        const {data,meta} = await getCartItems(cartId)
        
        this.setState({
            items:data,
            meta,
            cartId,
            loading:false
        })
    }
    
    _handleCheckout

    _handleRemoveFromCart = async itemId => {
        const { cartId }=this.state
        const {data,meta} = await removeFromCart(itemId,cartId)
        
        this.setState({
            items:data,
            meta
        })
    }

    render(){
        const {meta,...rest} = this.state
        const {loading} = rest

        return(
            <Layout title="Cart">
                <CartItemList {...rest} removeFromCart ={this._handleRemoveFromCart}/>
                {!loading && <CartSummary {...meta}/>}
            </Layout>
        )
    }
}