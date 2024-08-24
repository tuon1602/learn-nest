import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto{
    @IsMongoId({message:"invalid id"})
    @IsNotEmpty()
    _id:string;

    @IsOptional()
    name: string;
    
    @IsOptional()
    phone: string;

    @IsOptional()
    address: string;
    
    @IsOptional()
    image: string;
}
