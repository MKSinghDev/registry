import { useState } from 'react';

import { and, ControlProps, isBooleanControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';
import { shouldShowError } from '~/components/forms/utils';

const BooleanToggleControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, id, errors, config } = props;
    const [touched, setTouched] = useState(false);

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            <div className="flex items-center gap-2">
                <Switch
                    id={id}
                    checked={data ?? false}
                    onCheckedChange={checked => handleChange(path, checked)}
                    onBlur={() => setTouched(true)}
                    disabled={!enabled}
                />
                {label && (
                    <Label htmlFor={id} className="text-xs font-medium text-foreground cursor-pointer">
                        {label}
                    </Label>
                )}
            </div>
            {shouldShowError(config, touched) && errors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
        </div>
    );
};

export const booleanToggleControlTester = rankWith(3, and(isBooleanControl, optionIs('toggle', true)));
export default withJsonFormsControlProps(BooleanToggleControlRenderer);
