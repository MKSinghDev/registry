import { useState } from 'react';

import { ControlProps, isRangeControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import { Slider } from '~/components/ui/slider';
import { shouldShowError } from '~/components/forms/utils';

const SliderControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema, errors, config } = props;
    const [touched, setTouched] = useState(false);

    if (!visible) return null;

    const min = schema.minimum ?? 0;
    const max = schema.maximum ?? 100;
    const step = schema.multipleOf ?? 1;
    const current = data ?? min;

    return (
        <div className="flex flex-col gap-2 py-2" onBlur={() => setTouched(true)}>
            {label && (
                <div className="flex items-center justify-between">
                    <Label className="text-xs font-medium text-foreground">{label}</Label>
                    <span className="text-xs tabular-nums text-muted-foreground">{current}</span>
                </div>
            )}
            <Slider
                min={min}
                max={max}
                step={step}
                value={[current]}
                onValueChange={([value]) => handleChange(path, value)}
                disabled={!enabled}
            />
            {shouldShowError(config, touched) && errors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
        </div>
    );
};

export const sliderControlTester = rankWith(12, isRangeControl);
export default withJsonFormsControlProps(SliderControlRenderer);
