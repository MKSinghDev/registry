import { ControlProps, isDateControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const DateControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <label className="text-xs font-medium text-foreground">{label}</label>}
            <Input
                type="date"
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.value)}
                disabled={!enabled}
            />
        </div>
    );
};

export const dateControlTester = rankWith(11, isDateControl);
export default withJsonFormsControlProps(DateControlRenderer);