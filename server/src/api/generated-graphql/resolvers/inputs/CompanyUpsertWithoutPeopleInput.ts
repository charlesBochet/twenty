import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CompanyCreateWithoutPeopleInput } from './CompanyCreateWithoutPeopleInput';
import { CompanyUpdateWithoutPeopleInput } from './CompanyUpdateWithoutPeopleInput';

@TypeGraphQL.InputType('CompanyUpsertWithoutPeopleInput', {
  isAbstract: true,
})
export class CompanyUpsertWithoutPeopleInput {
  @TypeGraphQL.Field((_type) => CompanyUpdateWithoutPeopleInput, {
    nullable: false,
  })
  update!: CompanyUpdateWithoutPeopleInput;

  @TypeGraphQL.Field((_type) => CompanyCreateWithoutPeopleInput, {
    nullable: false,
  })
  create!: CompanyCreateWithoutPeopleInput;
}