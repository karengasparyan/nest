import {Table, Column, Min, Model, BelongsToMany} from 'sequelize-typescript';

@Table
export class Users extends Model {

    @Column
    name: string;

    @Column
    age: number;

}
