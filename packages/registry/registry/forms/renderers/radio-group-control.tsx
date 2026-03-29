import { useState } from 'react';

import { and, ControlProps, isEnumControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { shouldShowError } from '~/components/forms/utils';

const RadioGroupControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema, errors, config } = props;
    const [touched, setTouched] = useState(false);
    const options = (schema.enum ?? []) as string[];

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-2 py-2" onBlur={() => setTouched(true)}>
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
            {shouldShowError(config, touched) && errors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
        </div>
    );
};

export const radioGroupControlTester = rankWith(20, and(isEnumControl, optionIs('format', 'radio')));
export default withJsonFormsControlProps(RadioGroupControlRenderer);
