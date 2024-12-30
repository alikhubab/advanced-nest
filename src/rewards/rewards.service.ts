import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class RewardsService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3009, // Same port as the microservice
      },
    });
  }
  grantTo() {
    console.log('Granted to X');
    return 'Granted to X';
  }

  async accumulateRewards(data: number[]){
    console.log('Accumulating rewards...in RewardsService');
    try {
      const result = await this.client.send({cmd: 'sum'}, data).toPromise();
      console.log('Result:', result);
    } catch (error) {
      console.log('Error:', error)
    }
  }

  castLot(num: number) {
    console.log('Casting lot... in rewards service');
    this.client.emit('lot_casted', num);
  }
}
