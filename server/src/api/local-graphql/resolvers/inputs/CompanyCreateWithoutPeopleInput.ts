import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateNestedOneWithoutCompaniesInput } from './UserCreateNestedOneWithoutCompaniesInput';
import { WorkspaceCreateNestedOneWithoutCompaniesInput } from './WorkspaceCreateNestedOneWithoutCompaniesInput';

@TypeGraphQL.InputType('CompanyCreateWithoutPeopleInput', {
  isAbstract: true,
})
export class CompanyCreateWithoutPeopleInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  domainName!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  address!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  employees?: number | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutCompaniesInput, {
    nullable: true,
  })
  accountOwner?: UserCreateNestedOneWithoutCompaniesInput | undefined;

  @TypeGraphQL.Field((_type) => WorkspaceCreateNestedOneWithoutCompaniesInput, {
    nullable: false,
  })
  workspace!: WorkspaceCreateNestedOneWithoutCompaniesInput;
}