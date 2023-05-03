import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { OrgResolver } from './OrgResolver';

// This is what is shown in the docs, https://docs.nestjs.com/graphql/subscriptions
// This configuration also matches the TypeScript definitions.
// But it does not actually work.
const NotWorkingVersion = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: 'schema.gql',
  subscriptions: {
    'graphql-ws': true,
  },
});

// This configuration does NOT match the docs or the TypeScript definitions.
// But it actually works.
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
