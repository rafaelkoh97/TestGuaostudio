import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'mondoDb',
  connector: 'mongodb',
  url: 'mongodb://rafaelkoh:r4f43l@blog-shard-00-00.woykf.mongodb.net:27017,blog-shard-00-01.woykf.mongodb.net:27017,blog-shard-00-02.woykf.mongodb.net:27017/test?replicaSet=atlas-75g9ad-shard-0&ssl=true&authSource=admin',
  host: 'blog-shard-00-00.woykf.mongodb.net',
  port: 27017,
  user: 'rafaelkoh',
  password: 'r4f43l',
  database: 'blog',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MondoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mondoDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mondoDb', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
