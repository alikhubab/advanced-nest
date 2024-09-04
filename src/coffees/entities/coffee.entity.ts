import { withUuid } from '../../common/mixins/with-uuid.mixin/with-uuid.mixin';

export class Coffee {
  constructor(public name: string) {}
}

const CoffeeWithUuidCls = withUuid(Coffee);
const c = new CoffeeWithUuidCls('Black cfe');

c.
