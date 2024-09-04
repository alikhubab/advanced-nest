import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';

export function EntityExistsPipe(entityCIs: Type): Type<PipeTransform> {
  @Injectable()
  class EntityExistsPipeCIs implements PipeTransform {
    constructor(
      @Inject(entityCIs)
      private repository: { exists: (reason: unknown) => Promise<void> },
    ) {}

    async transform(value: any, metadata: ArgumentMetadata) {
      await this.repository.exists({ id: value });
      return value;
    }
  }
  return EntityExistsPipeCIs;
}
