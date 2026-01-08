import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { IsEmail, IsString, MinLength } from 'class-validator';


class RegisterDto {
@IsEmail()
email: string;


@IsString()
@MinLength(6)
password: string;


name?: string;
}


class LoginDto {
@IsEmail()
email: string;


@IsString()
password: string;
}


@Controller('auth')
export class AuthController {
constructor(private authService: AuthService, private usersService: UsersService) {}


@Post('register')
async register(@Body() dto: RegisterDto) {
const user = await this.usersService.create(dto.email, dto.password, dto.name);
return { id: user.id, email: user.email };
}


@Post('login')
async login(@Body() dto: LoginDto) {
const user = await this.authService.validateUser(dto.email, dto.password);
if (!user) throw new Error('Invalid credentials');
return this.authService.login(user);
}
}