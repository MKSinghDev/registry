'use client';

import {
    ArrayLayoutProps,
    composePaths,
    createDefaultValue,
    findUISchema,
    isObjectArrayWithNesting,
    rankWith,
} from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsArrayLayoutProps } from '@jsonforms/react';
import { useMemo } from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';

const ArrayLayoutRenderer = (props: ArrayLayoutProps) => {
    const {
        data,
        path,
        schema,
        uischema,
        uischemas,
        renderers,
        cells,
        visible,
        enabled,
        label,
        addItem,
        removeItems,
        moveUp,
        moveDown,
        rootSchema,
    } = props;

    const childUiSchema = useMemo(
        () => findUISchema(uischemas ?? [], schema, uischema.scope, path, undefined, uischema, rootSchema),
        [uischemas, schema, uischema, path, rootSchema]
    );

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                {label && <label className="text-xs font-medium text-foreground">{label}</label>}
                {enabled && (
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addItem(path, createDefaultValue(schema, rootSchema))()}
                        className="text-xs"
                    >
                        + Add
                    </Button>
                )}
            </div>

            {data > 0 && (
                <Accordion multiple>
                    {Array.from({ length: data }).map((_, index) => (
                        <AccordionItem key={index} value={String(index)}>
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] text-muted-foreground">
                                        {index + 1}
                                    </span>
                                    <span className="text-xs">{label} {index + 1}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-2 pt-1">
                                    <JsonFormsDispatch
                                        schema={schema}
                                        uischema={childUiSchema}
                                        path={composePaths(path, `${index}`)}
                                        renderers={renderers}
                                        cells={cells}
                                    />
                                    {enabled && (
                                        <div className="flex items-center gap-1 pt-1">
                                            {moveUp && index > 0 && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => moveUp(path, index)()}
                                                    className="h-7 text-xs"
                                                >
                                                    ↑ Up
                                                </Button>
                                            )}
                                            {moveDown && index < data - 1 && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => moveDown(path, index)()}
                                                    className="h-7 text-xs"
                                                >
                                                    ↓ Down
                                                </Button>
                                            )}
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeItems(path, [index])()}
                                                className="h-7 text-xs text-destructive hover:text-destructive"
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </div>
    );
};

export const arrayLayoutTester = rankWith(4, isObjectArrayWithNesting);
export default withJsonFormsArrayLayoutProps(ArrayLayoutRenderer);