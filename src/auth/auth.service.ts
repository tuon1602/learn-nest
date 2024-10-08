import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '@/modules/users/users.service';
import { comparePasswordHelper } from '@/helpers';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    const isValidPassword = await comparePasswordHelper(pass, user.password);
    if (!isValidPassword || !user) {
      return null;
    }
    return user;
  }
  async login(user: any) {
    const payload = { _id: user._id, username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async handleRegister(registerDto:CreateAuthDto){
    return await this.usersService.handleRegister(registerDto)
  }
}
