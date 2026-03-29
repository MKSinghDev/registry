import { CellProps, isTimeControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const TimeCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Input
        type="time"
        value={data ?? ''}
        onChange={e => handleChange(path, e.target.value)}
        disabled={!enabled}
        className="h-8 text-xs"
    />
);

export const timeCellTester = rankWith(1, isTimeControl);
export default withJsonFormsCellProps(TimeCell);