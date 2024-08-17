import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashedPassword } from '@/helpers';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  isEmailExist = async (email:string) =>{
    const isExist = await this.userModel.exists({email})
    if(isExist) return true
    return false
  }
  async create(createUserDto: CreateUserDto) {
    const {name,email,password,phone,address,image} = createUserDto
    const isExist = await this.isEmailExist(email)
    if(isExist){
      throw new BadRequestException(`Email ${email} alr exist`)
    }
    const hashPassword = await hashedPassword(password)
    const user = this.userModel.create({
      name,
      email,
      password: hashPassword,
      phone,
      address,
      image,
    });
    return {
      _id:(await user)._id
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
