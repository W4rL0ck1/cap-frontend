import { BaseEntity } from "./baseEntity.model"
import { Category } from "./category.model"

export interface Product extends BaseEntity {
    categoryID: string,
    name: string,
    value: number,
    description: string,
    active: boolean,
    discount: number,
    imageUrl: string,
    checkouts: any,
    Category: Category,
    updatedDate: string,
    createdDate: string,
    id: string
}
