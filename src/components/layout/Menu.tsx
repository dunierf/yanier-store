import { Link } from 'react-router-dom';
import { items } from '../../data/menu';

const Menu = (props: MenuProps) => {

    const handleClick = () => {
        if (props.onMenuItemClick)
            props.onMenuItemClick();
    }

    return (
        <nav>
            <ul>
                {items.map((item) => (
                    <li key={item.link} className="mb-2">
                        <Link to={item.link} onClick={handleClick}>
                            <span className="font-semibold">
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

 
export default Menu;

export type MenuProps = {
    onMenuItemClick?: () => void;
}