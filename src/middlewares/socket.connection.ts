import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {Socket} from "socket.io";
import {UnauthorizedException} from "@nestjs/common";

@WebSocketGateway({cors: {origin: '*'}})
export class SocketConnection implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message);
    }

    handleConnection(socket: Socket) {
        try {
            console.log('connected');
            const decoded = socket.handshake.headers.authorization;
        } catch (e) {
            return this.disconnect(socket);
        }
    }

    handleDisconnect() {
        console.log('disconnected')
    }

    private disconnect(socket: Socket){
        socket.emit('Error', new UnauthorizedException())
        socket.disconnect();
    }
}
