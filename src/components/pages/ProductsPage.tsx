import { useParams } from 'react-router-dom';

// Data
import { data, type Product } from '../../data/products';

// Components
import Products from '../ui/Products';

const ProductsPage = () => {
    const { category } = useParams<{ category: string }>();
    const categoryData = data.find(c => c.id === category);
    const items: Product[] = categoryData ? categoryData.items : [];

    return (
        <Products items={items} />
    );
}
 
export default ProductsPage;