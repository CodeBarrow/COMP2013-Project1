import type {ItemCardFunctions } from "./Thrift Happens.tsx"

export default function ItemCard({
    id,
    name,
    image,
    fit,
    category,
    color,
    description,
    size,
    price,
    quantity,
    itemQuantity,
    itemValueChange,
    addToCheckout,
}: ItemCardFunctions) {
    
return (
    <div className = "ItemCard">
        <img src={image} alt="" width="150px" />
        <p>{name}</p>
        <p>Fit: {fit}</p>
        <p>Category: {category}</p>
        <p>Color: {color}</p>
        <p>{description}</p>
        <p>Size: {size}</p>
        <p>Price: {price}$</p>
        <p>In Stock: {quantity}</p>
        <div className = "QuantityButtons">
            <button onClick={() => itemValueChange(id,-1)} disabled = {itemQuantity <= 0}>-</button>
            <span>{itemQuantity}</span>
            <button onClick={() => itemValueChange(id,1)} disabled = {itemQuantity >= quantity}>+</button>
        </div>
        
        <button onClick = {() => addToCheckout({
            id: id,
            image: image,
            name: name,
            fit: fit,
            category: category,
            color: color,
            description: description,
            size: size,
            price: price,
            quantity: quantity,
            itemQuantity: itemQuantity
        })} disabled = {itemQuantity <= 0} >Checkout</button>
    </div>
);
}