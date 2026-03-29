import { ControlProps, isEnumControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';

const EnumControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema, errors, config } = props;
    const options = (schema.enum ?? []) as string[];

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <Select
                value={data ?? ''}
                onValueChange={value => handleChange(path, value)}
                disabled={!enabled}
            >
                <SelectTrigger>
                    <SelectValue placeholder={`Select ${label ?? 'option'}`} />
                </SelectTrigger>
                <SelectContent>
                    {options.map(option => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {config.showErrors && <Typography variant="error">{errors}</Typography>}
        </div>
    );
};

export const enumControlTester = rankWith(11, isEnumControl);
export default withJsonFormsControlProps(EnumControlRenderer);
