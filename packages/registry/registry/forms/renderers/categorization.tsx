import { Categorization, Category, LayoutProps, rankWith, uiTypeIs } from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsLayoutProps } from '@jsonforms/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

const CategorizationRenderer = (props: LayoutProps) => {
    const { uischema, schema, path, visible, renderers, cells } = props;
    const categorization = uischema as Categorization;
    const categories = categorization.elements as Category[];

    if (!visible || !categories?.length) return null;

    return (
        <Tabs defaultValue={categories[0].label}>
            <TabsList>
                {categories.map(category => (
                    <TabsTrigger key={category.label} value={category.label}>
                        {category.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {categories.map(category => (
                <TabsContent key={category.label} value={category.label}>
                    <div className="flex flex-col gap-2 pt-2">
                        {category.elements.map((element, index) => (
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
                </TabsContent>
            ))}
        </Tabs>
    );
};

export const categorizationTester = rankWith(10, uiTypeIs('Categorization'));
export default withJsonFormsLayoutProps(CategorizationRenderer);