import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class UsersDto {
    @ApiModelProperty()
    age: number;
    @ApiModelProperty()
    name: string;

    constructor({age, name}: UsersDto) {
        this.age = age;
        this.name = name;
    }
}
