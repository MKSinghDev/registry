import { GroupLayout, LayoutProps, rankWith, uiTypeIs } from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsLayoutProps } from '@jsonforms/react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion';

const GroupRenderer = (props: LayoutProps) => {
    const { uischema, schema, path, visible, renderers, cells } = props;
    const group = uischema as GroupLayout;

    if (!visible) return null;

    return (
        <Accordion type="single" collapsible defaultValue="group">
            <AccordionItem value="group">
                <AccordionTrigger>{group.label}</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-2">
                        {group.elements.map((element, index) => (
                            <JsonFormsDispatch
                                key={index}
                                schema={schema}
                                uischema={element}
                                path={path}
                                renderers={renderers}
                                cells={cells}
                            />
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export const groupTester = rankWith(1, uiTypeIs('Group'));
export default withJsonFormsLayoutProps(GroupRenderer);