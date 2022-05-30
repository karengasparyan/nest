import { Table, Column, Min, Model} from 'sequelize-typescript';
import {MinDate} from "class-validator";

@Table
export class Users extends Model {

    @Column
    name: string;

    @Column
    age: number;

}
