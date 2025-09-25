
import { IsString,IsPositive,IsInt,IsNumber,IsOptional } from 'class-validator';

export class CreateItemDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    // @IsNumber()
    // price: number;

    @IsInt()
    @IsPositive()
    quantity: number;
}
