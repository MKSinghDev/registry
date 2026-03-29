import { CellProps, isIntegerControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const IntegerCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Input
        type="number"
        step={1}
        value={data ?? ''}
        onChange={e => handleChange(path, Math.trunc(e.target.valueAsNumber))}
        disabled={!enabled}
        className="h-8 text-xs"
    />
);

export const integerCellTester = rankWith(1, isIntegerControl);
export default withJsonFormsCellProps(IntegerCell);