import { FileTypeEnum } from '@/config/enums';

export const mimeTypeToFileTypeEnum = (mimeType: string): FileTypeEnum => {
  switch (true) {
    case mimeType.startsWith('image/'):
      return FileTypeEnum.Image;
    case mimeType.startsWith('video/'):
      return FileTypeEnum.Video;
    case mimeType.startsWith('audio/'):
      return FileTypeEnum.Audio;
    case mimeType === 'application/pdf':
      return FileTypeEnum.Pdf;
    default:
      return FileTypeEnum.File;
  }
};

/**
 * Fetches an image from the given path and converts it into a File object.
 * @param imagePath - The path of the image file to be fetched and converted.
 * @returns A Promise that resolves to a File object representing the image file.
 */
export const createFileFromImagePath = async (imagePath: string): Promise<File> => {
  try {
    const response = await fetch(imagePath);

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const blob = await response.blob();
    const filename = imagePath.substring(imagePath.lastIndexOf('/') + 1);

    return new File([blob], filename, { type: blob.type });
  } catch (error) {
    console.error('Error creating file from image:', error);
    return Promise.reject(error);
  }
};

/**
 * Converts a File or Blob object to a URL representing the object.
 * @param file - The File or Blob object to be converted.
 * @returns The URL representing the input file.
 */
export const fileToUrl = (file: File | Blob): string => {
  return URL.createObjectURL(file);
};
