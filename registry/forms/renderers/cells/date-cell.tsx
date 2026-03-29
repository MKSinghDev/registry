import { CellProps, isDateControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const DateCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Input
        type="date"
        value={data ?? ''}
        onChange={e => handleChange(path, e.target.value)}
        disabled={!enabled}
        className="h-8 text-xs"
    />
);

export const dateCellTester = rankWith(1, isDateControl);
export default withJsonFormsCellProps(DateCell);