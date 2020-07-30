import { DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import { BlogTag, BlogTagRelations, Blog} from '../models';
import { MondoDbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { BlogRepository } from './blog.repository';

export class BlogTagRepository extends DefaultCrudRepository<
  BlogTag,
  typeof BlogTag.prototype.id,
  BlogTagRelations
  > {

  public readonly blogs: HasManyRepositoryFactory<Blog, typeof BlogTag.prototype.id>;

  constructor(
    @inject('datasources.mondoDb') dataSource: MondoDbDataSource, @repository.getter('BlogRepository') protected blogRepositoryGetter: Getter<BlogRepository>,
  ) {
    super(BlogTag, dataSource);
    this.blogs = this.createHasManyRepositoryFactoryFor('blogs', blogRepositoryGetter,);
    this.registerInclusionResolver('blogs', this.blogs.inclusionResolver);
  }
}
