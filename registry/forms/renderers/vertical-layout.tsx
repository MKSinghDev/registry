import { Layout, LayoutProps, rankWith, uiTypeIs } from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsLayoutProps } from '@jsonforms/react';

const VerticalLayoutRenderer = (props: LayoutProps) => {
    const { uischema, schema, path, visible, renderers, cells } = props;
    const layout = uischema as Layout;

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-2">
            {layout.elements.map((element, index) => (
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
    );
};

export const verticalLayoutTester = rankWith(10, uiTypeIs('VerticalLayout'));
export default withJsonFormsLayoutProps(VerticalLayoutRenderer);