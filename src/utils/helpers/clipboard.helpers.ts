export const copyToClipboard = async (text: string, callback?: () => void) => {
  try {
    await navigator.clipboard.writeText(text);
    callback?.();
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
