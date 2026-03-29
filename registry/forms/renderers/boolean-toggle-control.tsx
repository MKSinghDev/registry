import { and, ControlProps, isBooleanControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';

const BooleanToggleControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, id } = props;

    if (!visible) return null;

    return (
        <div className="flex items-center gap-2 py-2">
            <Switch
                id={id}
                checked={data ?? false}
                onCheckedChange={checked => handleChange(path, checked)}
                disabled={!enabled}
            />
            {label && (
                <Label htmlFor={id} className="text-xs font-medium text-foreground cursor-pointer">
                    {label}
                </Label>
            )}
        </div>
    );
};

export const booleanToggleControlTester = rankWith(3, and(isBooleanControl, optionIs('toggle', true)));
export default withJsonFormsControlProps(BooleanToggleControlRenderer);