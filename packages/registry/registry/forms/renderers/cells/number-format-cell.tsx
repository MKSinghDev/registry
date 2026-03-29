'use client';

import { CellProps, isNumberControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';
import { useState } from 'react';

import { Input } from '~/components/ui/input';

const NumberFormatCell = ({ data, handleChange, path, enabled }: CellProps) => {
    const [focused, setFocused] = useState(false);

    const formatted =
        !focused && data !== undefined && data !== null && !isNaN(data)
            ? new Intl.NumberFormat().format(data)
            : (data ?? '');

    return (
        <Input
            type={focused ? 'number' : 'text'}
            value={focused ? (data ?? '') : formatted}
            onChange={e => handleChange(path, e.target.valueAsNumber)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={!enabled}
            className="h-8 text-xs"
        />
    );
};

export const numberFormatCellTester = rankWith(4, isNumberControl);
export default withJsonFormsCellProps(NumberFormatCell);