import { type Product as ProductType } from "../../data/products";

// Components
import Product from "./Product";

const Products = (props: ProductsProps) => {
    return (
        <div className="grid grid-cols-12 gap-5 w-full">
            {props.items.map((item) => (
                <div className="col-span-12 md:col-span-6 lg:col-span-4 pb-10" key={item.id}>
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