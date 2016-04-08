
export const Important = {
  clean(text) {
    const beginsWith = text.substring(0, 1);
    const important = (beginsWith === '!');
    let cleanText;
    if (important) {
      cleanText = text.slice(1, text.length);
    } else {
      cleanText = text;
    }
    return {
      text: cleanText,
      important,
    };
  },
};
