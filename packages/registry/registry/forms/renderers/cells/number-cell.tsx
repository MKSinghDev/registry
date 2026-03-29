import { CellProps, isNumberControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const NumberCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Input
        type="number"
        value={data ?? ''}
        onChange={e => handleChange(path, e.target.valueAsNumber)}
        disabled={!enabled}
        className="h-8 text-xs"
    />
);

export const numberCellTester = rankWith(1, isNumberControl);
export default withJsonFormsCellProps(NumberCell);