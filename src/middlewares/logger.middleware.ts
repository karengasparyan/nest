import { Injectable, NestMiddleware } from '@nestjs/common';
import { request, response, next } from './controller.dto';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(request: request, response: response, next: next) {
        console.log('ssssssssssssssssssssssssss');
        next();
    }
}
