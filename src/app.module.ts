import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { CronModule } from './cron/cron.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModuleModule } from './http-module/http-client.module';

@Module({
  imports: [
    CoffeesModule,
    SchedulerModule,
    CronModule,
    FibonacciModule,
    HttpClientModuleModule.register({
      baseUrl: 'localhost:3000',
      isGlobal: true,
    }),
    HttpClientModuleModule.register({
      baseUrl: 'localhost:3000',
      isGlobal: true,
    }),
    HttpClientModuleModule.register({
      baseUrl: 'localhost:3000',
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
