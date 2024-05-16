// Original file: null

export const NullValue = {
  NULL_VALUE: 0,
} as const;

export type NullValue =
  | 'NULL_VALUE'
  | 0

export type NullValue__Output = typeof NullValue[keyof typeof NullValue]
