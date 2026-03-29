import { and, ControlProps, isStringControl, optionIs, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { Textarea } from '~/components/ui/textarea';

const TextareaControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <label className="text-xs font-medium text-foreground">{label}</label>}
            <Textarea
                value={data ?? ''}
                onChange={e => handleChange(path, e.target.value)}
                disabled={!enabled}
                rows={4}
            />
        </div>
    );
};

export const textareaControlTester = rankWith(12, and(isStringControl, optionIs('multi', true)));
export default withJsonFormsControlProps(TextareaControlRenderer);