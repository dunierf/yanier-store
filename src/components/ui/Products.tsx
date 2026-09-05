import { type Product as ProductType } from "../../data/products";

// Components
import Product from "./Product";

const Products = (props: ProductsProps) => {
    return (
        <div className="grid grid-cols-4 gap-5 w-full">
            {props.items.map((item) => (
                <div className="pb-10" key={item.id}>
                    <a href={item.affiliateLink}>
                        <Product item={item} />
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default Products;

export type ProductsProps = {
    items: ProductType[];
}