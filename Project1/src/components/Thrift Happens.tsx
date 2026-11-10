
import type { ClothingProduct } from "../data/data.ts";
import ItemContainer from "./ItemsContainer.tsx"
import { products } from "../data/data.ts";
import { useState } from "react";



export interface ItemContainerProps {
  catalogue: ClothingProduct[];
  itemValueChange: (id: number, set: number) => void;
}

export interface ItemCardFunctions extends ClothingProduct {
    itemValueChange: (id: number, set: number) => void;
}

export default function ThriftHappens() 
{

    const [catalogue, setCatalogue] = useState<ClothingProduct[]>(products);

    const itemValueChange = (id: number, set: number) => {
        if (set > 0)
        {
            setCatalogue((prevCatalogue) => prevCatalogue.map((item) => item.id == id && (item.itemQuantity + set <= item.quantity) ? {...item, itemQuantity: item.itemQuantity + set}: {...item}));
        } else setCatalogue((prevCatalogue) => prevCatalogue.map((item) => item.id == id && (item.itemQuantity + set >= 0) ? {...item, itemQuantity: item.itemQuantity + set} : {...item}));
    };

    return (
        <div>
            <ItemContainer catalogue={catalogue} itemValueChange={itemValueChange}/>
        </div>
    );
}