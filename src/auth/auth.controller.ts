import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { Public } from '@/helpers/customize';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.signIn(
  //     createAuthDto.username,
  //     createAuthDto.password,
  //   );
  // }
  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }
  @Post('register')
  @Public()
  getProfile(@Body() registerDto: CreateUserDto) {
    return this.authService.handleRegister(registerDto)
  }
}
