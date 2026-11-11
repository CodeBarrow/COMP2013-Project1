import type {CheckoutCardFunctions } from "./Thrift Happens.tsx"


export default function CheckoutCard({
    name,
    image,
    price,
    itemQuantity,
    removeFromCheckout,
}: CheckoutCardFunctions) {
    
return (
    <div className = "CheckoutCard">
        <img src={image} alt="" width="150px" />
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>quantity: {itemQuantity}</p>
        <p>Total: {itemQuantity * price}</p>
        <button onClick = {() => removeFromCheckout}>Remove From Checkout</button>
    </div>
);
}