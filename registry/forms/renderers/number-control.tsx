import { ControlProps, isIntegerControl, isNumberControl, or, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Input } from '~/components/ui/input';

const NumberControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <label className="text-xs font-medium text-foreground">{label}</label>}
            <Input
                type="number"
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.valueAsNumber)}
                disabled={!enabled}
            />
        </div>
    );
};

export const numberControlTester = rankWith(11, or(isNumberControl, isIntegerControl));
export default withJsonFormsControlProps(NumberControlRenderer);