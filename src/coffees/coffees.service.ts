import { Inject, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { LazyModuleLoader } from '@nestjs/core';

export const COFFEES_DATA_SOURCE = Symbol('COFFEES_DATA_SOURCE');

export interface CoffeesDataSource {
  [index: number]: Coffee;
}

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEES_DATA_SOURCE) dataSource: CoffeesDataSource,
    private readonly leadyModuleLoader: LazyModuleLoader,
  ) {}
  async create(createCoffeeDto: CreateCoffeeDto) {
    console.time();
    const rewardsModuleRf = await this.leadyModuleLoader.load(() =>
      import('../rewards/rewards.module').then((r) => r.RewardsModule),
    );
    const { RewardsService } = await import('../rewards/rewards.service');
    const rewardService = rewardsModuleRf.get(RewardsService);
    rewardService.grantTo();
    console.timeEnd();

    return 'This action adds a new coffee';
  }

  findAll() {
    return `This action returns all coffees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
