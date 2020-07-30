import { DefaultCrudRepository } from '@loopback/repository';
import { Blog, BlogRelations } from '../models';
import { MondoDbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype.id,
  BlogRelations
  > {
  constructor(
    @inject('datasources.mondoDb') dataSource: MondoDbDataSource,
  ) {
    super(Blog, dataSource);
  }
}
