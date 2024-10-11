import { IsEmail, IsEnum } from "class-validator";

export class CreateUserDto {
    name: string;
    email: string;
    role: "INTERN" | "ENGINEER" | "ADMIN";
}