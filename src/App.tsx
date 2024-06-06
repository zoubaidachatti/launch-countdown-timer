import { AppLoading } from '@/layouts';
import { useAppSelector } from '@/redux/hooks';
import Router from '@/routes/Router';
import GlobalStyles from '@/theme/globalStyles';
import generateTheme from '@/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, useMemo } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const appConfig = useAppSelector((state) => state.appReducer);
  const theme = useMemo(
    () => generateTheme(appConfig.theme, appConfig.mode),
    [appConfig.theme, appConfig.mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Toaster
        toastOptions={{
          style: {
            padding: 0,
            margin: 0,
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      />
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<AppLoading />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
