import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { CronModule } from './cron/cron.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModuleModule } from './http-module/http-client.module';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RewardsModule } from "./rewards/rewards.module";

@Module({
  imports: [
    CoffeesModule,
    SchedulerModule,
    // CronModule,
    FibonacciModule,
    RewardsModule,
    HttpClientModuleModule.register({
      baseUrl: 'localhost:3000',
      isGlobal: true,
    }),
    ClientsModule.register([{name: 'MATH_SERVICE', transport: Transport.TCP, options: {
      host: 'localhost', port: 3009
      }}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
