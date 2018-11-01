import { gateway as MoltinGateway } from '@moltin/sdk';

//id pessoal do gerente
const Moltin = MoltinGateway({
    client_id : '6LUvYni7mvBh33RZmp8YL7PgKZPaNILKnOoSHaVQnk'
})

export const getProducts = () => Moltin.Products.With('main_image').All();

export const getProductById = (id) => Moltin.Products.With('main_image').Get(id);

export const addToCart = (productId, quantity) => Moltin.Cart().AddProduct(productId, quantity)

export const getCartItems = (id) => Moltin.Cart(id).Items()

export const removeFromCart = (itemId,cartId) => Moltin.Cart(cartId).RemoveItem(itemId)