import { and, isOneOfEnumControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsOneOfEnumProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Label } from '~/components/ui/label';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

interface OneOfRadioGroupProps {
    label?: string;
    data: any;
    handleChange: (path: string, value: any) => void;
    path: string;
    visible: boolean;
    enabled: boolean;
    options?: { value: any; label: string }[];
    errors?: string;
    config?: { showErrors?: boolean };
}

const OneOfRadioGroupControlRenderer = (props: OneOfRadioGroupProps) => {
    const { label, data, handleChange, path, visible, enabled, options = [], errors, config } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-2 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <RadioGroup
                value={data !== undefined ? String(data) : ''}
                onValueChange={value => handleChange(path, value)}
                disabled={!enabled}
            >
                {options.map(opt => (
                    <div key={String(opt.value)} className="flex items-center gap-2">
                        <RadioGroupItem value={String(opt.value)} id={`${path}-${opt.value}`} />
                        <Label htmlFor={`${path}-${opt.value}`} className="text-xs cursor-pointer">
                            {opt.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
            {config?.showErrors && <Typography variant="error">{errors}</Typography>}
        </div>
    );
};

export const oneOfRadioGroupControlTester = rankWith(20, and(isOneOfEnumControl, optionIs('format', 'radio')));
export default withJsonFormsOneOfEnumProps(OneOfRadioGroupControlRenderer as any);
