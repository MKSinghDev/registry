import { and, ControlProps, isEnumControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

const RadioGroupControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema, errors, config } = props;
    const options = (schema.enum ?? []) as string[];

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-2 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <RadioGroup
                value={data ?? ''}
                onValueChange={value => handleChange(path, value)}
                disabled={!enabled}
            >
                {options.map(option => (
                    <div key={option} className="flex items-center gap-2">
                        <RadioGroupItem value={option} id={`${path}-${option}`} />
                        <Label htmlFor={`${path}-${option}`} className="text-xs cursor-pointer">
                            {option}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
            {config.showErrors && <Typography variant="error">{errors}</Typography>}
        </div>
    );
};

export const radioGroupControlTester = rankWith(20, and(isEnumControl, optionIs('format', 'radio')));
export default withJsonFormsControlProps(RadioGroupControlRenderer);
