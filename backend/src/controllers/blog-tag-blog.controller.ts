import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  BlogTag,
  Blog,
} from '../models';
import { BlogTagRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

@authenticate('jwt')
export class BlogTagBlogController {
  constructor(
    @repository(BlogTagRepository) protected blogTagRepository: BlogTagRepository,
  ) { }

  @get('/blog-tags/{id}/blogs', {
    responses: {
      '200': {
        description: 'Array of BlogTag has many Blog',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Blog) },
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Blog>,
  ): Promise<Blog[]> {
    return this.blogTagRepository.blogs(id).find(filter);
  }

  @post('/blog-tags/{id}/blogs', {
    responses: {
      '200': {
        description: 'BlogTag model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Blog) } },
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof BlogTag.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blog, {
            title: 'NewBlogInBlogTag',
            exclude: ['id'],
            optional: ['blogTagId']
          }),
        },
      },
    }) blog: Omit<Blog, 'id'>,
  ): Promise<Blog> {
    return this.blogTagRepository.blogs(id).create(blog);
  }

  @patch('/blog-tags/{id}/blogs', {
    responses: {
      '200': {
        description: 'BlogTag.Blog PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blog, { partial: true }),
        },
      },
    })
    blog: Partial<Blog>,
    @param.query.object('where', getWhereSchemaFor(Blog)) where?: Where<Blog>,
  ): Promise<Count> {
    return this.blogTagRepository.blogs(id).patch(blog, where);
  }

  @del('/blog-tags/{id}/blogs', {
    responses: {
      '200': {
        description: 'BlogTag.Blog DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Blog)) where?: Where<Blog>,
  ): Promise<Count> {
    return this.blogTagRepository.blogs(id).delete(where);
  }
}
