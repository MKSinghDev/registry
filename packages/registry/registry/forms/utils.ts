/**
 * Translates a JSONForms AJV error to a human-readable message.
 * Reads `errorMessage` from the field's JSON Schema — supports both
 * per-keyword objects and a single string fallback.
 *
 * Usage: pass to `<JsonForms i18n={{ translateError }} />`
 */
export const translateError = (error: {
    keyword: string;
    parentSchema?: Record<string, unknown>;
}): string => {
    const customMessages = error.parentSchema?.errorMessage;
    if (customMessages && typeof customMessages === 'object') {
        return (customMessages as Record<string, string>)[error.keyword] ?? '';
    }
    if (typeof customMessages === 'string') return customMessages;
    return '';
};

/**
 * Controls when a field first shows its error message.
 *
 * - `'onBlur'`   — show after the field loses focus for the first time
 * - `'onSubmit'` — show all errors when the form is submitted
 *
 * Re-validation (updating a visible error as the user types) is handled
 * automatically by JSONForms — no extra config needed.
 *
 * Mirrors Conform's `shouldValidate` API.
 */
export type ShouldValidate = 'onBlur' | 'onSubmit';

/**
 * Determines whether a field's error should be visible.
 *
 * @param config  - JSONForms config object; reads `shouldValidate`
 * @param touched - whether the field has been blurred at least once (used by `onBlur`)
 */
export const shouldShowError = (
    config: { shouldValidate?: ShouldValidate } | undefined,
    touched: boolean
): boolean => {
    if (config?.shouldValidate === 'onBlur') return touched;
    if (config?.shouldValidate === 'onSubmit') return true;
    return false;
};
