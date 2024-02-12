import { Controller, Get, UseGuards, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { ValidationPipe } from './validation/validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  getHello(): string {
    return this.appService.getHello();
  }
}
