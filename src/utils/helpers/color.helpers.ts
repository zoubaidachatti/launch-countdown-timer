// Function to convert hex to RGB string
export function hexToRgb(hex: string): string {
  // Remove '#' if present
  hex = hex.replace('#', '');

  // Parse the hex values into separate r, g, b values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB string
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to convert RGB string to hex
export function rgbToHex(rgb: string): string {
  // Extract the RGB values from the string
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!match) {
    throw new Error('Invalid RGB string format');
  }

  // Parse the RGB values
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);

  // Convert the RGB values to hex
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  // Return the hex string
  return `#${rHex}${gHex}${bHex}`;
}
