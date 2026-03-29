import { useState } from 'react';

import { ControlProps, isIntegerControl, isNumberControl, or, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { shouldShowError } from '~/components/forms/utils';

const NumberControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, errors, config } = props;
    const [touched, setTouched] = useState(false);

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <Input
                type="number"
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.valueAsNumber)}
                onBlur={() => setTouched(true)}
                disabled={!enabled}
            />
            {shouldShowError(config, touched) && errors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
        </div>
    );
};

export const numberControlTester = rankWith(11, or(isNumberControl, isIntegerControl));
export default withJsonFormsControlProps(NumberControlRenderer);
