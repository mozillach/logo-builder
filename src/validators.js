export const colorValidator = (value) => !value.length || value.search(/^#[0-9a-fA-F]{6}$/) !== -1;
export const mimeValidator = (value) => value.search(/^[a-z]+\/[a-z+]+$/) !== -1;
