import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma-clients/jobber-auth';
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserInput: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: {
        email: createUserInput.email,
        password: await argon.hash(createUserInput.password),
      },
    });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
