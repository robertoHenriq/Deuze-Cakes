import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';


@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
constructor(private usersService: UsersService) {}


@Get('me')
async me(@Req() req: any) {
return this.usersService.findById(req.user.userId);
}
}