export const FormatImage = (value: any) => {
  if (!value || typeof value === 'string') {
    return { url: value };
  } else {
    return value;
  }
};
