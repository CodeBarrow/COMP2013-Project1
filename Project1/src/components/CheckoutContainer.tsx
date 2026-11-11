import CheckoutCard from "./CheckoutCard"
import type {CheckoutContainerProps} from "./Thrift Happens"

export default function ItemContainer({ items, removeFromCheckout}: CheckoutContainerProps) {
    return (
        <div className = "ItemContainer">
            {items.map((item) => (
                <CheckoutCard key={item.id} {...item} removeFromCheckout = {removeFromCheckout}/>
            ))}
        </div>
    );
}