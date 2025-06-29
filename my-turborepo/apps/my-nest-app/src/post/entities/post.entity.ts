import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => Int)
  authorId: number;

  @Field()
  createdAt: Date;

}
