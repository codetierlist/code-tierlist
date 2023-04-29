import { Controller, Get } from '@nestjs/common';
import { User, UserRole } from 'src/types';

@Controller('auth')
export class AuthController {
  @Get('success')
  async signIn(): Promise<User> {
    return {
      email: 'demo@example.com',
      username: 'demo',
      avatar: 'https://i.imgur.com/3GvZX8w.png',
      role: UserRole.STUDENT,
      mostRecentSubmission: 'some submission file in string form',
    };
  }
}
