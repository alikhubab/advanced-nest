import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  grantTo() {
    console.log('Granted to X');
  }
}
