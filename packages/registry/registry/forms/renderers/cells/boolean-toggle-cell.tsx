import { and, CellProps, isBooleanControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';

import { Switch } from '~/components/ui/switch';

const BooleanToggleCell = ({ data, handleChange, path, enabled }: CellProps) => (
    <Switch
        checked={data ?? false}
        onCheckedChange={checked => handleChange(path, checked)}
        disabled={!enabled}
    />
);

export const booleanToggleCellTester = rankWith(2, and(isBooleanControl, optionIs('toggle', true)));
export default withJsonFormsCellProps(BooleanToggleCell);