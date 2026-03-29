import { ControlProps, isTimeControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const TimeControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <label className="text-xs font-medium text-foreground">{label}</label>}
            <Input
                type="time"
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.value)}
                disabled={!enabled}
            />
        </div>
    );
};

export const timeControlTester = rankWith(11, isTimeControl);
export default withJsonFormsControlProps(TimeControlRenderer);