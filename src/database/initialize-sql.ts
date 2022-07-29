import {SequelizeModule} from "@nestjs/sequelize";
import {Users} from "../users/users.model";
import {Sequelize} from "sequelize-typescript";

const options = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'toolkit',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
    },
    models: [
        Users,
    ],
}

export default class db {
    static initialize() {
        // @ts-ignore
        return SequelizeModule.forRoot(options)
    }
    static manual() {
        // @ts-ignore
        return new Sequelize(options)
    }
}
