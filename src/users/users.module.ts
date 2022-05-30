import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import { UsersSchema } from '../schemas/users.schema';
import {MongooseModule} from "@nestjs/mongoose";
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
        DatabaseModule,
    ],
    providers: [
        UsersService,
        ...usersProviders,
    ],
    controllers: [
        UsersController,
    ]
})
export class UsersModule {
}
