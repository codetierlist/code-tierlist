import { Get, Body, Controller, HttpStatus, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(
    @Body() body: CreateUserDto,
  ): Promise<{ access_token: string; refresh_token: string;}> {
    const user = await this.authService.createUser(body);
    return this.authService.login(user);
  }
  
  @Post('login')
  async login(
    @Body() body: SignInDto,
  ): Promise<any> {
    if (body.refreshToken) {
      return this.authService.refreshToken(body.refreshToken);
    } else if (body.email && body.password) {
      const user = await this.authService.validateUser(body.email, body.password);
      return this.authService.login(user);
    }
  }

  @Post('logout')
  async logout(
    @Body() body: { refresh_token: string }
  ): Promise<{ status: HttpStatus; message: string }> {
    const disabled = await this.authService.disableRefreshToken(body.refresh_token);
    if (disabled) {
      return {
        status: HttpStatus.OK,
        message: "Deleted",
      };
    } else {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: "Refresh token not found",
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(
    @Request() req,
  ): Promise<any> {
    return {
      avatar: req.user.avatar,
      role: req.user.role,
      myProjects: [
				{
					name: "CSC148 A2",
					numTests: 150,
					grade: "S",
					description: "This is where the assignment description belongs. We’re no strangers to love you know the rules and so do I Lorem ipsum dolor carrot cake apple pie cider vinegar accessibility",
				},
			]
    };
  }
}
