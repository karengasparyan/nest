import {Controller, Get, HttpException, HttpStatus, Next, Req, Res} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersDto} from './dto/users.dto';
import {next} from '../middlewares/controller.dto';

@ApiTags("users")
@Controller('users')
export class UsersController {
    @Get('/')
    @ApiResponse({
        status: 200,
        type: UsersDto,
        description: 'The record has been successfully created.'
    })
    @ApiResponse({status: 403, description: 'Forbidden.'})
    async getUsers(@Next() next: next): Promise<void> {
        return next(new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED));
    };
    @Get('/test')
    findAll(@Next() next): string {
        return 'This action returns all cats';
    }
}
