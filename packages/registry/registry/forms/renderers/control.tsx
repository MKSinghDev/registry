import { ControlProps, isControl, rankWith } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import Typography from '~/components/ui/typography';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

const ControlRenderer = (props: ControlProps) => {
    const { label, data, handleChange, path, visible, enabled, errors, config } = props;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-1 py-2">
            {label && <Label className="text-xs font-medium text-foreground">{label}</Label>}
            <Input value={data ?? ''} onChange={e => handleChange(path, e.target.value)} disabled={!enabled} />
            {config.showErrors && <Typography variant="error">{errors.split("\n")[0]}</Typography>}
        </div>
    );
};

export const controlTester = rankWith(10, isControl);
export default withJsonFormsControlProps(ControlRenderer);
