import {Sequelize} from 'sequelize-typescript';
import {Users} from '../users/users.entity';

export const databaseProviders =
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'nest',
                models: [Users]
            });
            // sequelize.addModels([Users]);
            await sequelize.sync();
            return sequelize;
        },
    };
