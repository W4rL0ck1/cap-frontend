import { BaseEntity } from "./baseEntity.model"

export interface User extends BaseEntity {
     name: string,
     email: string,
     gender: Date,
     cpfCnpj: boolean,
}
