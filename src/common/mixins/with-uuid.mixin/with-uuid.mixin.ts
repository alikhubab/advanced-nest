import { Type } from '@nestjs/common';
import { randomUUID } from 'crypto';

export function withUuid<TBase extends Type>(Base: TBase) {
  return class extends Base {
    uuid = randomUUID();
  };
}
