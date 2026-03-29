import { CellProps, isStringControl, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const TextCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Input
        value={data ?? ''}
        onChange={e => handleChange(path, e.target.value)}
        disabled={!enabled}
        className="h-8 text-xs"
    />
);

export const textCellTester = rankWith(1, isStringControl);
export default withJsonFormsCellProps(TextCell);