import { BaseEntity } from "./baseEntity.model"

export interface Category extends BaseEntity {
    name: string,
    description: string,
    discount: number,
    updatedDate: string,
    createdDate: string,
    id: string
}
