import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsStrongPassword } from 'class-validator'

@InputType()
export class CreateUserInput {
    @IsEmail()
    @Field()
    email: string;

    @IsStrongPassword()
    @Field()
    password: string;
 }