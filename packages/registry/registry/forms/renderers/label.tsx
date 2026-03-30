import { LabelElement, rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsRendererProps } from '@jsonforms/react';

import { typographyVariants } from '~/components/ui/typography';

interface LabelRendererProps {
    uischema: LabelElement;
}

const LabelRenderer = ({ uischema }: LabelRendererProps) => (
    <p className={typographyVariants({ variant: 'large' })}>{uischema.text}</p>
);

export const labelTester = rankWith(10, uiTypeIs('Label'));
export default withJsonFormsRendererProps(LabelRenderer as any);
