import { Body, Controller, HttpStatus, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(
    @Body() body: CreateUserDto,
  ): Promise<Omit<User, "password" | "refresh_tokens" | "id" >> {
    return this.authService.createUser(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() req,
    @Body() body: SignInDto,
  ): Promise<any> {
    if (body.refreshToken) {
      const refresh_token = req.headers.authorization?.split(" ")[1];
      if (!refresh_token) throw new UnauthorizedException();
      return this.authService.refreshToken(body.refreshToken);
    } else if (body.email && body.password) {
      const user = await this.authService.validateUser(body.email, body.password);
      return this.authService.login(user);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(
    @Body() body: { refreshToken: string }
  ): Promise<{ status: HttpStatus; message: string }> {
    const disabled = await this.authService.disableRefreshToken(body.refreshToken);
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
}
