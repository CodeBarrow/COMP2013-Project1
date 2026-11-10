import ItemCard from "./ItemCard"
import type {ItemContainerProps} from "./Thrift Happens"

export default function ItemContainer({ catalogue, itemValueChange }: ItemContainerProps) {
    return (
        <div className = "ItemContainer">
            {catalogue.map((item) => (
                <ItemCard key={item.id} {...item} itemValueChange={itemValueChange}/>
            ))}
        </div>
    );
}