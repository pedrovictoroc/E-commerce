import {Input, Button, Label } from 'semantic-ui-react'
import {addToCart} from '../lib/moltim'

export default class AddToCart extends React.Component{
    state={
        loading:false,
        quantity:1
    }
    
    _handleChange = ({target: {value}}) => {
        this.setState({
            quantity:value
        })
    }

    _handleSubmit =async () =>{
        const {productId} = this.props
        const {quantity} = this.state

        this.setState({
            loading:true
        })
        await addToCart(productId,quantity)

        this.setState({
            loading:false,
            quantity:1
        })
    }

    render(){
        const {loading, quantity} = this.state

        return(
            <Input type='number' 
                   placeholder='quantidade' 
                   value={quantity} 
                   onChange={e => this._handleChange(e)}
                   action ={{
                       color:'red',
                       content:'Add to cart',
                       icon:'plus cart',
                       onClick: this._handleSubmit,
                       loading,
                       disabled:loading
                   }}/>
        )
    }
}