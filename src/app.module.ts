import {Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import {ServeStaticModule} from '@nestjs/serve-static';
import { SocketConnection } from './middlewares/socket.connection';
import {join} from 'path';
import {LoggerMiddleware} from './middlewares/logger.middleware';
import {UsersModule} from './users/users.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../../', 'web'),
            exclude: ['/api*'],
        }),
        UsersModule,
    ],
    providers: [SocketConnection],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .exclude(
                {path: 'login', method: RequestMethod.POST},
                {path: 'sign-up', method: RequestMethod.POST},
            ).forRoutes('*');
    }
}
