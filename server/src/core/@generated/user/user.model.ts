import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkspaceMember } from '../workspace-member/workspace-member.model';
import { Company } from '../company/company.model';
import { RefreshToken } from '../refresh-token/refresh-token.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => String, {nullable:true})
    avatarUrl!: string | null;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => Date, {nullable:true})
    lastSeen!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disabled!: boolean;

    @HideField()
    passwordHash!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @HideField()
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => WorkspaceMember, {nullable:true})
    workspaceMember?: WorkspaceMember | null;

    @Field(() => [Company], {nullable:true})
    companies?: Array<Company>;

    @HideField()
    refreshTokens?: Array<RefreshToken>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @HideField()
    _count?: UserCount;
}
