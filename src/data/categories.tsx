import { data } from "./products";

export const categories = data.map((category) => ({
    id: category.id,
    name: category.name
}));

export type Category = {
    id: string | number;
    name: string;
}