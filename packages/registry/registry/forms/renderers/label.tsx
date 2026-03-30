import { LabelElement, rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsRendererProps } from '@jsonforms/react';

import { typographyVariants } from '~/components/ui/typography';

interface LabelRendererProps {
    uischema: LabelElement;
    visible: boolean;
}

const LabelRenderer = ({ uischema, visible }: LabelRendererProps) => {
    if (!visible) return null;

    return (
        <p className={typographyVariants({ variant: 'large' })}>{uischema.text}</p>
    );
};

export const labelTester = rankWith(10, uiTypeIs('Label'));
export default withJsonFormsRendererProps(LabelRenderer as any);
