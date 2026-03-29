import { useState } from 'react';

import { ControlProps, JsonSchema, rankWith, UISchemaElement } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { shouldShowError } from '~/components/forms/utils';

const hasEnumAndText = (schema: JsonSchema): boolean => {
    if (!schema.anyOf) return false;
    const hasEnum = schema.anyOf.some((s: JsonSchema) => s.enum !== undefined);
    const hasText = schema.anyOf.some((s: JsonSchema) => s.type === 'string' && s.enum === undefined);
    return hasEnum && hasText;
};

const AnyOfStringOrEnumControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema, id, errors, config } = props;
    const [touched, setTouched] = useState(false);

    if (!visible) return null;

    const enumOptions = schema.anyOf
        ?.filter((s: JsonSchema) => s.enum !== undefined)
        .flatMap((s: JsonSchema) => s.enum as string[]) ?? [];

    const listId = `${id}-list`;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <Input
                list={listId}
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.value)}
                onBlur={() => setTouched(true)}
                disabled={!enabled}
            />
            <datalist id={listId}>
                {enumOptions.map(opt => (
                    <option key={opt} value={opt} />
                ))}
            </datalist>
            {shouldShowError(config, touched) && errors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
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
