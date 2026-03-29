import { isOneOfEnumControl, rankWith } from '@jsonforms/core';
import { withJsonFormsOneOfEnumProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';

interface OneOfEnumProps {
    label?: string;
    data: any;
    handleChange: (path: string, value: any) => void;
    path: string;
    visible: boolean;
    enabled: boolean;
    options?: { value: any; label: string }[];
    errors?: string;
    config?: { showErrors?: boolean };
}

const OneOfEnumControlRenderer = (props: OneOfEnumProps) => {
    const { label, data, handleChange, path, visible, enabled, options = [], errors, config } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <Select
                value={data !== undefined ? String(data) : ''}
                onValueChange={value => handleChange(path, value)}
                disabled={!enabled}
            >
                <SelectTrigger>
                    <SelectValue placeholder={`Select ${label ?? 'option'}`} />
                </SelectTrigger>
                <SelectContent>
                    {options.map(opt => (
                        <SelectItem key={String(opt.value)} value={String(opt.value)}>
                            {opt.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {config?.showErrors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
        </div>
    );
};

export const oneOfEnumControlTester = rankWith(5, isOneOfEnumControl);
export default withJsonFormsOneOfEnumProps(OneOfEnumControlRenderer as any);
