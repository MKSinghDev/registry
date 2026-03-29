import { ControlProps, JsonSchema, rankWith, UISchemaElement } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const hasEnumAndText = (schema: JsonSchema): boolean => {
    if (!schema.anyOf) return false;
    const hasEnum = schema.anyOf.some((s: JsonSchema) => s.enum !== undefined);
    const hasText = schema.anyOf.some((s: JsonSchema) => s.type === 'string' && s.enum === undefined);
    return hasEnum && hasText;
};

const AnyOfStringOrEnumControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema, id } = props;

    if (!visible) return null;

    const enumOptions = schema.anyOf
        ?.filter((s: JsonSchema) => s.enum !== undefined)
        .flatMap((s: JsonSchema) => s.enum as string[]) ?? [];

    const listId = `${id}-list`;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <label className="text-xs font-medium text-foreground">{label}</label>}
            <Input
                list={listId}
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.value)}
                disabled={!enabled}
            />
            <datalist id={listId}>
                {enumOptions.map(opt => (
                    <option key={opt} value={opt} />
                ))}
            </datalist>
        </div>
    );
};

export const anyOfStringOrEnumControlTester = rankWith(
    5,
    (_uischema: UISchemaElement, schema: JsonSchema) => {
        if (!schema) return false;
        return hasEnumAndText(schema);
    }
);
export default withJsonFormsControlProps(AnyOfStringOrEnumControlRenderer);