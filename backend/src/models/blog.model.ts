import { Entity, model, property, belongsTo} from '@loopback/repository';
import {BlogTag} from './blog-tag.model';

@model()
export class Blog extends Entity {
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
  smallDescription?: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @belongsTo(() => BlogTag)
  blogTagId: string;

  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  // describe navigational properties here
}

export type BlogWithRelations = Blog & BlogRelations;
