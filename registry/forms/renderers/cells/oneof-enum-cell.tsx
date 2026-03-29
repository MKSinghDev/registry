import { isOneOfEnumControl, rankWith } from '@jsonforms/core';
import { withJsonFormsOneOfEnumCellProps } from '@jsonforms/react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';

interface OneOfEnumCellProps {
    data: any;
    handleChange: (path: string, value: any) => void;
    path: string;
    enabled: boolean;
    options?: { value: any; label: string }[];
}

const OneOfEnumCell = ({ data, handleChange, path, enabled, options = [] }: OneOfEnumCellProps) => (
    <Select
        value={data !== undefined ? String(data) : ''}
        onValueChange={value => handleChange(path, value)}
        disabled={!enabled}
    >
        <SelectTrigger className="h-8 text-xs">
            <SelectValue />
        </SelectTrigger>
        <SelectContent>
            {options.map(opt => (
                <SelectItem key={String(opt.value)} value={String(opt.value)} className="text-xs">
                    {opt.label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
);

export const oneOfEnumCellTester = rankWith(2, isOneOfEnumControl);
export default withJsonFormsOneOfEnumCellProps(OneOfEnumCell as any);