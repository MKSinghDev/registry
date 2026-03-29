import { JsonFormsCellRendererRegistryEntry, JsonFormsRendererRegistryEntry } from '@jsonforms/core';
import AnyOfStringOrEnumControlRenderer, { anyOfStringOrEnumControlTester } from './anyof-string-or-enum-control';
import ArrayLayoutRenderer, { arrayLayoutTester } from './array-layout';
import BooleanControlRenderer, { booleanControlTester } from './boolean-control';
import BooleanToggleControlRenderer, { booleanToggleControlTester } from './boolean-toggle-control';
import CategorizationRenderer, { categorizationTester } from './categorization';
import ControlRenderer, { controlTester } from './control';
import DateControlRenderer, { dateControlTester } from './date-control';
import DateTimeControlRenderer, { dateTimeControlTester } from './datetime-control';
import EnumControlRenderer, { enumControlTester } from './enum-control';
import GroupRenderer, { groupTester } from './group';
import HorizontalLayoutRenderer, { horizontalLayoutTester } from './horizontal-layout';
import LabelRenderer, { labelTester } from './label';
import NumberControlRenderer, { numberControlTester } from './number-control';
import OneOfEnumControlRenderer, { oneOfEnumControlTester } from './oneof-enum-control';
import OneOfRadioGroupControlRenderer, { oneOfRadioGroupControlTester } from './oneof-radio-group-control';
import RadioGroupControlRenderer, { radioGroupControlTester } from './radio-group-control';
import SliderControlRenderer, { sliderControlTester } from './slider-control';
import TextareaControlRenderer, { textareaControlTester } from './textarea-control';
import TimeControlRenderer, { timeControlTester } from './time-control';
import VerticalLayoutRenderer, { verticalLayoutTester } from './vertical-layout';

import BooleanCell, { booleanCellTester } from './cells/boolean-cell';
import BooleanToggleCell, { booleanToggleCellTester } from './cells/boolean-toggle-cell';
import DateCell, { dateCellTester } from './cells/date-cell';
import EnumCell, { enumCellTester } from './cells/enum-cell';
import IntegerCell, { integerCellTester } from './cells/integer-cell';
import NumberCell, { numberCellTester } from './cells/number-cell';
import NumberFormatCell, { numberFormatCellTester } from './cells/number-format-cell';
import OneOfEnumCell, { oneOfEnumCellTester } from './cells/oneof-enum-cell';
import TextCell, { textCellTester } from './cells/text-cell';
import TimeCell, { timeCellTester } from './cells/time-cell';

/**
 * All JSONForms renderers. Pass to the `renderers` prop of `<JsonForms />`.
 *
 * @example
 * import { jsonFormsRenderers, jsonFormsCells } from '~/components/forms/renderers';
 *
 * <JsonForms
 *   schema={schema}
 *   uischema={uischema}
 *   data={data}
 *   renderers={jsonFormsRenderers}
 *   cells={jsonFormsCells}
 *   onChange={({ data }) => setData(data)}
 * />
 */
export const jsonFormsRenderers: JsonFormsRendererRegistryEntry[] = [
    // Layouts
    { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
    { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
    { tester: categorizationTester, renderer: CategorizationRenderer },
    { tester: groupTester, renderer: GroupRenderer },
    { tester: arrayLayoutTester, renderer: ArrayLayoutRenderer },
    // Display
    { tester: labelTester, renderer: LabelRenderer },
    // Controls — most specific first (higher rank wins)
    { tester: oneOfRadioGroupControlTester, renderer: OneOfRadioGroupControlRenderer },
    { tester: radioGroupControlTester, renderer: RadioGroupControlRenderer },
    { tester: textareaControlTester, renderer: TextareaControlRenderer },
    { tester: sliderControlTester, renderer: SliderControlRenderer },
    { tester: anyOfStringOrEnumControlTester, renderer: AnyOfStringOrEnumControlRenderer },
    { tester: oneOfEnumControlTester, renderer: OneOfEnumControlRenderer },
    { tester: enumControlTester, renderer: EnumControlRenderer },
    { tester: booleanToggleControlTester, renderer: BooleanToggleControlRenderer },
    { tester: booleanControlTester, renderer: BooleanControlRenderer },
    { tester: dateTimeControlTester, renderer: DateTimeControlRenderer },
    { tester: dateControlTester, renderer: DateControlRenderer },
    { tester: timeControlTester, renderer: TimeControlRenderer },
    { tester: numberControlTester, renderer: NumberControlRenderer },
    { tester: controlTester, renderer: ControlRenderer },
];

/**
 * All JSONForms cells. Pass to the `cells` prop of `<JsonForms />` alongside jsonFormsRenderers.
 * Cells are used inside array table layouts.
 */
export const jsonFormsCells: JsonFormsCellRendererRegistryEntry[] = [
    { tester: oneOfEnumCellTester, cell: OneOfEnumCell },
    { tester: enumCellTester, cell: EnumCell },
    { tester: booleanToggleCellTester, cell: BooleanToggleCell },
    { tester: booleanCellTester, cell: BooleanCell },
    { tester: numberFormatCellTester, cell: NumberFormatCell },
    { tester: numberCellTester, cell: NumberCell },
    { tester: integerCellTester, cell: IntegerCell },
    { tester: dateCellTester, cell: DateCell },
    { tester: timeCellTester, cell: TimeCell },
    { tester: textCellTester, cell: TextCell },
];