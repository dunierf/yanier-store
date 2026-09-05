import { categories } from "./categories";

export const items: MenuItem[] = [
    { 
        label: 'Inicio', 
        link: '/' 
    },
    ...categories.map((category) => ({
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

