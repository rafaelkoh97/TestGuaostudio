import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Blog,
  BlogTag,
} from '../models';
import {BlogRepository} from '../repositories';

export class BlogBlogTagController {
  constructor(
    @repository(BlogRepository)
    public blogRepository: BlogRepository,
  ) { }

  @get('/blogs/{id}/blog-tag', {
    responses: {
      '200': {
        description: 'BlogTag belonging to Blog',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(BlogTag)},
          },
        },
      },
    },
  })
  async getBlogTag(
    @param.path.string('id') id: typeof Blog.prototype.id,
  ): Promise<BlogTag> {
    return this.blogRepository.blogTag(id);
  }
}
