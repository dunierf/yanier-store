export const categories = [
    {
        id: "auriculares",
        name: "Auriculares",
        slug: "auriculares",
        description: "Auriculares inalámbricos, Bluetooth y dispositivos de audio.",
        image: "https://picsum.photos/seed/category-headphones/800/600",
        brands: ["SoundMax", "AudioPro", "TechBeat", "WaveSound"]
    },
    {
        id: "smartphones",
        name: "Smartphones",
        slug: "smartphones",
        description: "Teléfonos móviles inteligentes, accesorios y dispositivos 5G.",
        image: "https://picsum.photos/seed/category-smartphone/800/600",
        brands: ["NovaTech", "PixelOne", "GalaxyPro", "XPhone"]
    },
    {
        id: "hogar",
        name: "Hogar",
        slug: "hogar",
        description: "Productos prácticos para organizar y mejorar el hogar.",
        image: "https://picsum.photos/seed/category-home/800/600",
        brands: ["HomePlus", "CasaNova", "LivingPro", "EasyHome"]
    }
];

export type Category = {
    id: string | number;
    name: string;
    description: string;
    image: string;
    brands: string[];
}