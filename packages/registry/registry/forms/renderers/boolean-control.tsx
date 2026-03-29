import { ControlProps, isBooleanControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';

const BooleanControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, id } = props;

    if (!visible) return null;

    return (
        <div className="flex items-center gap-2 py-2">
            <Checkbox
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

export const booleanControlTester = rankWith(10, isBooleanControl);
export default withJsonFormsControlProps(BooleanControlRenderer);