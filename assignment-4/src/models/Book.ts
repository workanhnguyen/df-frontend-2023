import { Category } from "./Category";

export interface Book {
    id: number,
    name: string,
    author: string,
    topic: Category
}