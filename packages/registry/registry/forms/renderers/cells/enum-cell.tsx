import { CellProps, isEnumControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';

const EnumCell = ({ data, handleChange, path, enabled, schema }: CellProps) => {
    const options = (schema.enum ?? []) as string[];
    return (
        <Select
            value={data ?? ''}
            onValueChange={value => handleChange(path, value)}
            disabled={!enabled}
        >
            <SelectTrigger className="h-8 text-xs">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {options.map(opt => (
                    <SelectItem key={opt} value={opt} className="text-xs">
                        {opt}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export const enumCellTester = rankWith(2, isEnumControl);
export default withJsonFormsCellProps(EnumCell);