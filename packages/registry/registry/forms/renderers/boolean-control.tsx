import { ControlProps, isBooleanControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';

const BooleanControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, id, errors, config } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            <div className="flex items-center gap-2">
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
            {config.showErrors && <Typography variant="error">{errors}</Typography>}
        </div>
    );
};

export const booleanControlTester = rankWith(10, isBooleanControl);
export default withJsonFormsControlProps(BooleanControlRenderer);
