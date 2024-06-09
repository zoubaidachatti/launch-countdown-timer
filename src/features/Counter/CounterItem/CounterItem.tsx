import { Layout } from '@/config/constants';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const CounterItem = ({ value, label }: { value: number; label: string }) => {
  const { t } = useTranslation();

  return (
    <Stack direction={'column'} spacing={{ xs: 1, sm: 2 }}>
      <Box
        borderRadius={Layout.borderRadius}
        bgcolor={'grey.900'}
        width={{ xs: 70, sm: 130 }}
        height={{ xs: 80, sm: '129px' }}
      >
        <Box
          borderRadius={Layout.borderRadius}
          width={{ xs: 70, sm: 130 }}
          height={{ xs: 73, sm: '121px' }}
          position={'relative'}
          overflow={'hidden'}
        >
          <Box
            bgcolor={'grey.900'}
            zIndex={11}
            borderRadius={'50%'}
            width="10px"
            height="10px"
            bottom={{ xs: 31, sm: 56 }}
            left={-5}
            position={'absolute'}
          />
          <Box
            bgcolor={'grey.900'}
            zIndex={11}
            borderRadius={'50%'}
            width="10px"
            height="10px"
            bottom={{ xs: 31, sm: 56 }}
            right={-5}
            position={'absolute'}
          />
          <Box
            borderRadius={`${Layout.borderRadius} ${Layout.borderRadius} 0 0`}
            width="100%"
            height="50%"
            bgcolor={'grey.300'}
            position={'relative'}
            zIndex={10}
            overflow={'hidden'}
          >
            <Typography
              width={'100%'}
              textAlign={'center'}
              variant="h1"
              fontSize={{ xs: '1.5rem', sm: '3.125rem' }}
              color="secondary.dark"
              position={'absolute'}
              bottom={{ xs: -12, sm: -25 }}
              sx={{ userSelect: 'none' }}
            >
              {value}
            </Typography>
          </Box>
          <Box
            overflow={'hidden'}
            borderRadius={` 0 0 ${Layout.borderRadius} ${Layout.borderRadius}`}
            width="100%"
            height="50%"
            bgcolor={'grey.400'}
            position={'relative'}
          >
            <Typography
              top={{ xs: -12, sm: -25 }}
              width={'100%'}
              textAlign={'center'}
              variant="h1"
              color="secondary.light"
              position={'absolute'}
              fontSize={{ xs: '1.5rem', sm: '3.125rem' }}
              sx={{ userSelect: 'none' }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography textAlign={'center'} color="primary.main" variant="body1">
        {t(label)}
      </Typography>
    </Stack>
  );
};

export default CounterItem;
