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
 * Validation mode for form fields.
 * - `onChange` — show errors immediately as the user types / interacts
 * - `onBlur`   — show errors after the field loses focus
 * - `onSubmit` — show all errors (set this on form submission)
 *
 * Usage:
 *   config={{ validationMode: 'onBlur' }}
 *   config={{ validationMode: submitted ? 'onSubmit' : 'onBlur' }}
 */
export type ValidationMode = 'onChange' | 'onBlur' | 'onSubmit';

/**
 * Determines whether a field's error should be visible.
 *
 * @param config  - JSONForms config object; reads `validationMode`
 * @param touched - whether the field has been blurred at least once (used by `onBlur` mode)
 */
export const shouldShowError = (
    config: { validationMode?: ValidationMode } | undefined,
    touched: boolean
): boolean => {
    const mode = config?.validationMode;
    if (mode === 'onChange') return true;
    if (mode === 'onBlur') return touched;
    if (mode === 'onSubmit') return true;
    return false;
};
