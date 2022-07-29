import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {IsString, IsNotEmpty, IsNumber, IsInt, Min, Max} from "class-validator";
import {Type} from "class-transformer";


export class UsersDto {

    @ApiModelProperty({description: "", required: true})
    @IsString()
    readonly name: string;

    @ApiModelProperty({description: "", required: true})
    @IsInt()
    @Min(18, {
        message: '18 min value',
    })
    @Max(56)
    @Type(() => Number)
    readonly age: number;

}
