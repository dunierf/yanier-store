// Types
import { type Product as ProductType } from "../../data/products";

const Product = (props: ProductProps) => {

    const fakeImages = [
        "https://images.pexels.com/photos/34802062/pexels-photo-34802062.jpeg",
        "https://images.pexels.com/photos/30125493/pexels-photo-30125493.jpeg",
        "https://images.pexels.com/photos/32505825/pexels-photo-32505825.jpeg",
        "https://images.pexels.com/photos/34802062/pexels-photo-34802062.jpeg",
    ];

    const image = fakeImages[Math.floor(Math.random() * fakeImages.length)];

    return (
        <div className="flex flex-col">
            <div className="aspect-4/3 w-full overflow-hidden">
                <img src={image} alt={props.item.name} className="w-full h-full object-cover" />
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
                <h1 className="text-lg font-bold">
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