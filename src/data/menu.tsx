export const items: MenuItem[] = [
    { 
        label: 'Inicio', 
        link: '/' 
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
        label: 'Ropa',
        link: 'productos/ropa'
    },
    {
        label: 'Zapatos',
        link: 'productos/zapatos'
    },
    {
        label: 'Ferretería',
        link: 'productos/ferreteria'
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

