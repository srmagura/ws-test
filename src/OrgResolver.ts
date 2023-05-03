import { PubSub } from 'graphql-subscriptions';

import {
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

@ObjectType()
export class Org {
  @Field(() => ID)
  id: string;
}

const pubSub = new PubSub();

@Resolver(Org)
export class OrgResolver {
  @Query(() => [Org])
  orgs() {
    const o = new Org();
    o.id = 'test';

    return [o];
  }

  @Subscription(() => Org)
  orgCreated() {
    return pubSub.asyncIterator('orgCreated');
  }
}
