import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Hills from '@/assets/images/pattern-hills.svg';
import Stars from '@/assets/images/bg-stars.svg';

export default function GlobalStyles() {
  const theme = useTheme();
  // Debugging to check if the image paths are correct
  console.log('Hills:', Hills);
  console.log('Stars:', Stars);

  // Function to check if images are loaded correctly
  const checkImage = (url: string) => {
    const img = new Image();
    img.src = url;
    img.onload = () => console.log(`${url} loaded successfully`);
    img.onerror = () => console.error(`Error loading ${url}`);
  };

  checkImage(Hills);
  checkImage(Stars);
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          height: '100vh',
          background: `url(${Hills}) no-repeat bottom right 20%, url(${Stars}), linear-gradient(to bottom, ${theme.palette.grey[900]}, ${theme.palette.primary.dark})`,
          overflowX: 'hidden',
          transition: 'background-color  .2s linear',
          backgroundSize: '100%',
        },
      }}
    />
  );
}
