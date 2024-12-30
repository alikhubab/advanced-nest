import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { RewardsService } from "./rewards.service";

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}
  @Get()
  findAll() {
    return this.rewardsService.grantTo();

  }
  @Post('accumulate')
  async accumulate(@Body('data') data: number[]) {
    return this.rewardsService.accumulateRewards(data);
  }

  @Post('cast_lot')
  async castLot(@Body('num') num: number) {
    return this.rewardsService.castLot(num);
  }
}
