import { AppLoading } from '@/layouts';
import Router from '@/routes/Router';
import GlobalStyles from '@/theme/globalStyles';
import generateTheme from '@/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, useMemo } from 'react';

function App() {
  const theme = useMemo(() => generateTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<AppLoading />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
