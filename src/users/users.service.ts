import {Inject, Injectable} from '@nestjs/common';
import {SocketConnection} from "../middlewares/socket.connection";
import {UsersDto} from '../dto/users.dto';
import { Users } from './users.entity';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users') private usersMongo: Model<UsersDto>,
        @Inject('USERS_REPOSITORY') private users: typeof Users
    ) {}
    async create(data){
        // throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
        // return SocketConnection.emit('1','test', {
        //     message: 'hello'
        // })
        await this.usersMongo.create(data);
        return await this.users.create(data);
    }
}
