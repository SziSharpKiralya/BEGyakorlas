import { Controller, Get, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Get('color-picker')
  @Render('color-picker')
  setColor(@Query('color') color: string) {
    return {
      color: color || '#ff0000',
    };
  }

  @Get('quadratic')
  @Render('quadratic')
  getQuadratic(@Query('a') addA: string, @Query('b') addB: string, @Query('c') addC: string) {
    return {
      addA: addA || '0',
      addB: addB || '0',
      addC: addC || '0',
      result: `${addA}x² + ${addB}x + ${addC} = 0`
    }
  }
}
