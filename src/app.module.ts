/* eslint-disable */
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { OrgResolver } from './OrgResolver';

const NotWorkingVersion = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: 'schema.gql',
  subscriptions: {
    'graphql-ws': true,
  },
});

const WorkingVersion = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: 'schema.gql',
  subscriptions: {
    subscriptions: {
      'graphql-ws': true,
    },
  } as any,
});

@Module({
  imports: [
    // Uncomment the "version" that you want to use:
    NotWorkingVersion,
    // WorkingVersion,
  ],
  providers: [OrgResolver],
})
export class AppModule {}
