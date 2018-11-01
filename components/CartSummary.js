import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

const stripKey ='pk_test_MaPwc5VxDh2lVF14fHjBkmTG'

export default ({handleCheckout,display_price: {with_tax: {amount,currency,formatted}}}) => (
    <React.Fragment>
        <Divider/>
        <Segment clearing size='large'>
            <strong>Total: </strong> {formatted}
            <StripeCheckout
                name="nextjs"
                amount="{amount}"
                currency="{currency}"
                stripeKey="{stripeKey}"
                shippingAddress = {false}
                billingAddress={true}
                zipCOde={true}
                token={handleCheckout}
                reconfigureOnUpdate ={false}
                triggerEvent="onClick">
            <Button color="black" floated="right">
                checkout
            </Button>    
            </StripeCheckout>
        </Segment>
    </React.Fragment>
)