import {Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { SocketConnection } from './middlewares/socket.connection';
import { MongooseModule } from '@nestjs/mongoose';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {AuthMiddleware} from './middlewares/auth.middleware';
import {UsersModule} from './users/users.module';

@Module({
    //mer modulneri hamar
    imports: [
        SocketConnection,
        MongooseModule.forRoot('mongodb://localhost:27017/nest'),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../../', 'web'),
            exclude: ['/api*'],
        }),
        UsersModule,
    ],
    //drsi moulneri hamar
    providers: [
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .exclude(
                {path: 'login', method: RequestMethod.POST},
                {path: 'sign-up', method: RequestMethod.POST},
            ).forRoutes('*');
    }
}
