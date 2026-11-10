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
}: ItemCardFunctions) {
    
return (
    <div className = "ClothingCard">
        <p>{id}</p>
        <img src={image} alt="" width="150px" />
        <p>{name}</p>
        <p>Fit: {fit}</p>
        <p>Category: {category}</p>
        <p>Color: {color}</p>
        <p>{description}</p>
        <p>Size: {size}</p>
        <p>Price: {price}</p>
        <p>quantity: {quantity}</p>
        <button onClick={() => itemValueChange(id,1)}>+</button>
        <p>{itemQuantity}</p>
        <button onClick={() => itemValueChange(id,-1)}>-</button>
        <button>Checkout</button>
    </div>
);
}