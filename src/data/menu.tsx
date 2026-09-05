export const items: MenuItem[] = [
    { 
        label: 'Inicio', 
        link: '/' 
    },
    {
        label: 'Productos', 
        link: 'productos'
    },
    {
        label: 'Auriculares',
        link: 'productos/auriculares'
    },
    {
        label: 'Smartphones',
        link: 'productos/smartphones'
    },
    {
        label: 'Hogar',
        link: 'productos/hogar'
    },
    {
        label: 'Contacto',
        link: 'contacto'
    }
];

export type MenuItem = {
    label: string;
    link: string;
}

