
import type { ClothingProduct } from "../data/data.ts";
import ItemContainer from "./ItemsContainer.tsx"
import CheckoutContainer from "./CheckoutContainer.tsx"
import { products } from "../data/data.ts";
import { useState } from "react";


export interface ItemContainerProps {
  catalogue: ClothingProduct[];
  itemValueChange: (id: number, set: number) => void;
  addToCheckout: (item: ClothingProduct) => void;
}

export interface CheckoutContainerProps {
    items: ClothingProduct[];
    removeFromCheckout:(id: number, checkoutQuantity: number) => void;
}

export interface ItemCardFunctions extends ClothingProduct {
    itemValueChange: (id: number, set: number) => void;
    addToCheckout: (item: ClothingProduct) => void;
}

export interface CheckoutCardFunctions extends ClothingProduct {
    removeFromCheckout:(id: number, checkoutQuantity: number) => void;
}

export default function ThriftHappens() 
{

    const [catalogue, setCatalogue] = useState<ClothingProduct[]>(products);
    const [checkout, setCheckout] = useState<ClothingProduct[]>([]);

    const itemValueChange = (id: number, set: number) => {
        if (set > 0)
        {
            setCatalogue((prevCatalogue) => prevCatalogue.map((item) => 
                item.id == id && (item.itemQuantity + set <= item.quantity) 
            ? {...item, itemQuantity: item.itemQuantity + set}
            : {...item}));
        } else 
            setCatalogue((prevCatalogue) => 
                prevCatalogue.map((item) => item.id == id && (item.itemQuantity + set >= 0) 
            ? {...item, itemQuantity: item.itemQuantity + set} 
            : {...item}));
    };

    const addToCheckout = (item: ClothingProduct) => {
        if (checkout.some(checkOutItem => checkOutItem.id === item.id)) {
            setCheckout((prevCheckout) => prevCheckout.map(
                (checkOutItem) => checkOutItem.id == item.id 
            ? {...checkOutItem, itemQuantity: checkOutItem.itemQuantity + item.itemQuantity}
            : {...checkOutItem}));
        } else {
            setCheckout((prevCheckout) => [...prevCheckout,item]);
        }
        setCatalogue((prevCatalogue) => 
                prevCatalogue.map((catalogueItem) => catalogueItem.id == item.id 
            ? {...catalogueItem, itemQuantity: 0, quantity: catalogueItem.quantity - item.itemQuantity} 
            : {...catalogueItem}));
    }

    const removeFromCheckout = (id: number, checkoutQuantity: number) => {
        setCatalogue((prevCatalogue) => 
                prevCatalogue.map((catalogueItem) => catalogueItem.id == id 
            ? {...catalogueItem, itemQuantity: 0, quantity: catalogueItem.quantity + checkoutQuantity} 
            : {...catalogueItem}));
        setCheckout((prevCheckout) => prevCheckout.filter((checkoutItem) => checkoutItem.id !== id));
    }

    const emptyCart = () => {
        checkout.forEach(item => {removeFromCheckout(item.id, item.itemQuantity)});
    }

    return (
        <div>
            <img src = "src/assets/images/logo.png" className="Logo"></img>
            <ItemContainer catalogue={catalogue} itemValueChange={itemValueChange} addToCheckout={addToCheckout}/>
            <h1>CHECKOUT</h1>
            <CheckoutContainer items = {checkout} removeFromCheckout = {removeFromCheckout}/>
            <button onClick={emptyCart}>Remove All</button>
        </div>
    );
}