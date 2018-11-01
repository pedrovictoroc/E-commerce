import Link from 'next/link'
import {Item,Loader,Button,Message} from 'semantic-ui-react'

export default ({items,removeFromCart,loading}) => {
    if(loading) return <Loader active inline ="centered"/>
    //não mostra quando está vazio??
    if(items.lenght === 0){
        return(
            <Message warning>
                <Message.Header> Seu carrinho está vazio! </Message.Header>
                <p>É necessário adicionar item para o carrinho antes de fazer o CheckOut</p>
            </Message>
        )
    }

    const mapCartItemsToItems =(items) =>
    items.map(({id,product_id,name,quantity,meta})=>{
        const price = meta.display_price.with_tax.unit.formatted || null
    
        return{
            childKey:id,
            header:(
                <Link href={`/product?id=${product_id}`} passHref>
                    <Item.Header as="a">{name}</Item.Header>
                </Link>
            ),
            meta:`${quantity}x${price}`,
            extra:(
                <Button 
                    basica
                    icon='remove'
                    floated='right'
                    onClick = {() => removeFromCart(id)}/>
            )
        }
    })

    return <Item.Group divided items={mapCartItemsToItems(items)}/>
}