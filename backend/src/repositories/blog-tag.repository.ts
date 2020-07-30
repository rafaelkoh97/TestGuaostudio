import { DefaultCrudRepository, repository } from '@loopback/repository';
import { BlogTag, BlogTagRelations } from '../models';
import { MondoDbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { BlogRepository } from './blog.repository';

export class BlogTagRepository extends DefaultCrudRepository<
  BlogTag,
  typeof BlogTag.prototype.id,
  BlogTagRelations
  > {
  constructor(
    @inject('datasources.mondoDb') dataSource: MondoDbDataSource,
  ) {
    super(BlogTag, dataSource);
  }
}
