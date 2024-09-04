import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  RequestTimeoutException,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CircuitBreakerInterceptor } from '../common/interceptors/circuit-breaker/circuit-breaker.interceptor';
import { EntityExistsPipe } from '../common/pipes/entity-exists/entity-exists.pipe';
import { Coffee } from './entities/coffee.entity';

@UseInterceptors(CircuitBreakerInterceptor)
@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeesService: CoffeesService,
    // private readonly coffeesDataSource: CoffeesDataSource,
    // @Inject(CoffeesDataSource) coffeesDataSource: CoffeesDataSource,
    // @Inject(CoffeesService) private coffeesService: CoffeesService,
  ) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  findAll() {
    console.log('findAllCAlled');
    throw new RequestTimeoutException('Time out');
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', EntityExistsPipe(Coffee)) id: string) {
    return this.coffeesService.findOne(+id);
  }
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
