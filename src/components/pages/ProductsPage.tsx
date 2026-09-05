import { useParams } from 'react-router-dom';

const ProductsPage = () => {
    const { category } = useParams<{ category: string }>();

    return (
        <p>
            { category }
        </p>
    );
}
 
export default ProductsPage;