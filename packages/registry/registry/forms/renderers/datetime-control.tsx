import { ControlProps, isDateTimeControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const DateTimeControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <label className="text-xs font-medium text-foreground">{label}</label>}
            <Input
                type="datetime-local"
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.value)}
                disabled={!enabled}
            />
        </div>
    );
};

export const dateTimeControlTester = rankWith(11, isDateTimeControl);
export default withJsonFormsControlProps(DateTimeControlRenderer);