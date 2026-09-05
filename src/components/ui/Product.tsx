// Types
import { type Product as ProductType } from "../../data/products";

const Product = (props: ProductProps) => {
    return (
        <div className="flex flex-col">
            <div className="aspect-4/3 bg-gray-300">

            </div>
            <div className="flex flex-row w-full justify-between mt-2">
                <div>
                    <h2>
                        {props.item.rating}
                    </h2>
                </div>
                <div>
                    <h2 className="font-semibold">
                        {props.item.price} USD
                    </h2>
                </div>
            </div>
            <div className="mt-2">
                <h1 className="text-xl font-bold">
                    {props.item.name}
                </h1>
            </div>
            <div className="mt-2">
                { props.item.description }
            </div>
        </div>
    );
}
 
export default Product;

export type ProductProps = {
    item: ProductType;
}