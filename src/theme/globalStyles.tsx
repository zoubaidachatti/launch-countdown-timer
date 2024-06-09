import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <GlobalThemeStyles
      styles={{
        body: {
          height: '100vh',
          overflowX: 'hidden',
        },
      }}
    />
  );
}
