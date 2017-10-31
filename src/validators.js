export const colorValidator = (value) => !value.length || value.search(/^#[0-9a-fA-F]{6}$/) !== -1;
