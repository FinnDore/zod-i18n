import { z } from 'zod';

const a = {
    name: z.string(),
};
type ExtractKeys<T extends { [k: string]: any }> = T extends infer G
    ? `${string & keyof G}`
    : never;

const zI18n = <
    Input extends typeof a,
    i18nKeys extends readonly ExtractKeys<Input>[]
>(
    schema: Input,
    keys?: i18nKeys
): {
    [key in
        | (i18nKeys extends Array<string> ? `${i18nKeys[number]}_i18n` : never)
        | keyof Input]: string;
} => {
    return {} as any;
};

const schemaYea = zI18n(
    {
        name: z.string(),
    },
    ['name']
);
