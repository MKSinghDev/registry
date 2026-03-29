import { ControlProps, isRangeControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Slider } from '~/components/ui/slider';

const SliderControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, schema } = props;

    if (!visible) return null;

    const min = schema.minimum ?? 0;
    const max = schema.maximum ?? 100;
    const step = schema.multipleOf ?? 1;
    const current = data ?? min;

    return (
        <div className="flex flex-col gap-2 py-2">
            {label && (
                <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-foreground">{label}</label>
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
        </div>
    );
};

export const sliderControlTester = rankWith(12, isRangeControl);
export default withJsonFormsControlProps(SliderControlRenderer);