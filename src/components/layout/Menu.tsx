import { Link } from 'react-router-dom';
import { items } from '../../data/menu';

const Menu = () => {
    return (
        <nav>
            <ul>
                {items.map((item) => (
                    <li key={item.link} className="mb-2">
                        <Link to={item.link}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

 
export default Menu;