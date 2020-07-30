import { DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import { Blog, BlogRelations, BlogTag} from '../models';
import { MondoDbDataSource } from '../datasources';
import { inject, Getter} from '@loopback/core';
import {BlogTagRepository} from './blog-tag.repository';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype.id,
  BlogRelations
  > {

  public readonly blogTag: BelongsToAccessor<BlogTag, typeof Blog.prototype.id>;

  constructor(
    @inject('datasources.mondoDb') dataSource: MondoDbDataSource, @repository.getter('BlogTagRepository') protected blogTagRepositoryGetter: Getter<BlogTagRepository>,
  ) {
    super(Blog, dataSource);
    this.blogTag = this.createBelongsToAccessorFor('blogTag', blogTagRepositoryGetter,);
    this.registerInclusionResolver('blogTag', this.blogTag.inclusionResolver);
  }
}
