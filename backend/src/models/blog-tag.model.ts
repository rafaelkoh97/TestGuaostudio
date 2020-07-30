import { Entity, model, property, hasMany} from '@loopback/repository';
import {Blog} from './blog.model';

@model()
export class BlogTag extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  color?: string;
  
  @hasMany(() => Blog)
  blogs: Blog[];

  constructor(data?: Partial<BlogTag>) {
    super(data);
  }
}

export interface BlogTagRelations {
  // describe navigational properties here
}

export type BlogTagWithRelations = BlogTag & BlogTagRelations;
