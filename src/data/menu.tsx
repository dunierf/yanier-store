import { data } from './products';

export const items: MenuItem[] = [
    { 
        label: 'Inicio', 
        link: '/' 
    },
    ...data.map((category) => ({
        label: category.name,
        link: `productos/${category.id}`
    })),
    {
        label: 'Contacto',
        link: 'contacto'
    }
];

export type MenuItem = {
    label: string;
    link: string;
}

