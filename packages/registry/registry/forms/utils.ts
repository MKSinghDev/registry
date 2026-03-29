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
