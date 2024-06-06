/**
 * Checks if the file type of a given file is included in a list of available types.
 * @param file - The file to be validated.
 * @param availableTypes - An array of available file types.
 * @returns Returns `true` if the file type is included in the `availableTypes` array, otherwise returns `false`.
 */
export const validateFileType = (file: File, availableTypes: string[]): boolean => {
  const fileType = file.type?.split('/')[1];
  return availableTypes.includes(`.${fileType}`);
};

/**
 * Checks if the size of a file is valid by comparing it to a maximum size.
 * @param file - The file object to check the size of.
 * @param maxSize - The maximum allowed size in bytes.
 * @returns True if the file size is valid, false otherwise.
 * @throws Error if maxSize is not a positive number.
 */
export const isFileSizeValid = (file: File, maxSize: number): boolean => {
  if (maxSize <= 0) {
    throw new Error('maxSize must be a positive number');
  }
  return file.size <= maxSize;
};

/**
 * Checks if a file's size and type are valid based on the given maximum size and available types.
 * @param file - The file object to be validated.
 * @param maxSize - The maximum allowed size for the file in bytes.
 * @param availableTypes - An array of available file types.
 * @returns A boolean value indicating whether the file's size and type are valid.
 */
export const isSizeAndTypeValid = (
  file: File,
  maxSize: number,
  availableTypes: string[],
): boolean => {
  try {
    return isFileSizeValid(file, maxSize) && validateFileType(file, availableTypes);
  } catch {
    return false;
  }
};
