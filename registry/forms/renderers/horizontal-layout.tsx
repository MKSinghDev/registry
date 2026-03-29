import { Layout, LayoutProps, rankWith, uiTypeIs } from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsLayoutProps } from '@jsonforms/react';

const HorizontalLayoutRenderer = (props: LayoutProps) => {
    const { uischema, schema, path, visible, renderers, cells } = props;
    const layout = uischema as Layout;

    if (!visible) return null;

    return (
        <div className="flex flex-row gap-4">
            {layout.elements.map((element, index) => (
                <div key={index} className="flex-1">
                    <JsonFormsDispatch
                        schema={schema}
                        uischema={element}
                        path={path}
                        renderers={renderers}
                        cells={cells}
                    />
                </div>
            ))}
        </div>
    );
};

export const horizontalLayoutTester = rankWith(10, uiTypeIs('HorizontalLayout'));
export default withJsonFormsLayoutProps(HorizontalLayoutRenderer);