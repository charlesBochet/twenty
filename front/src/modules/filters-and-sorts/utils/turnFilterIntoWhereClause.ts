import { ActiveTableFilter } from '../types/ActiveTableFilter';

export function turnFilterIntoWhereClause(filter: ActiveTableFilter) {
  switch (filter.type) {
    case 'text':
      switch (filter.operand) {
        case 'contains':
          return {
            [filter.field]: {
              contains: filter.value,
            },
          };
        case 'does-not-contain':
          return {
            [filter.field]: {
              not: {
                contains: filter.value,
              },
            },
          };
        default:
          throw new Error(
            `Unknown operand ${filter.operand} for ${filter.type} filter`,
          );
      }
    case 'number':
      switch (filter.operand) {
        case 'greater-than':
          return {
            [filter.field]: {
              gte: parseFloat(filter.value),
            },
          };
        case 'less-than':
          return {
            [filter.field]: {
              lte: parseFloat(filter.value),
            },
          };
        default:
          throw new Error(
            `Unknown operand ${filter.operand} for ${filter.type} filter`,
          );
      }
    case 'date':
      switch (filter.operand) {
        case 'greater-than':
          return {
            [filter.field]: {
              gte: filter.value,
            },
          };
        case 'less-than':
          return {
            [filter.field]: {
              lte: filter.value,
            },
          };
        default:
          throw new Error(
            `Unknown operand ${filter.operand} for ${filter.type} filter`,
          );
      }
    case 'entity':
      switch (filter.operand) {
        case 'is':
          return {
            [filter.field]: {
              equals: filter.value,
            },
          };
        case 'is-not':
          return {
            [filter.field]: {
              not: { equals: filter.value },
            },
          };
        default:
          throw new Error(
            `Unknown operand ${filter.operand} for ${filter.type} filter`,
          );
      }
    default:
      throw new Error('Unknown filter type');
  }
}
