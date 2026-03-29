import { LabelElement, rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsRendererProps } from '@jsonforms/react';

interface LabelRendererProps {
    uischema: LabelElement;
    visible: boolean;
}

const LabelRenderer = ({ uischema, visible }: LabelRendererProps) => {
    if (!visible) return null;

    return (
        <p className="text-xs font-medium text-muted-foreground">{uischema.text}</p>
    );
};

export const labelTester = rankWith(10, uiTypeIs('Label'));
export default withJsonFormsRendererProps(LabelRenderer as any);