import { Field, ID, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
export class Org {
  @Field(() => ID)
  id: string;
}

@Resolver(Org)
export class OrgResolver {
  @Query(() => [Org])
  orgs() {
    const o = new Org();
    o.id = 'test';

    return [o];
  }
}
