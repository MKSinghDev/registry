import { CellProps, isBooleanControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Checkbox } from '~/components/ui/checkbox';

const BooleanCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Checkbox
        checked={data ?? false}
        onCheckedChange={checked => handleChange(path, checked)}
        disabled={!enabled}
    />
);

export const booleanCellTester = rankWith(1, isBooleanControl);
export default withJsonFormsCellProps(BooleanCell);