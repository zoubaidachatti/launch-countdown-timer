import EditIcon from '@/assets/icons/edit.svg?react';
import ImageIcon from '@/assets/icons/image.svg?react';
import { CustomCard, TypographyOverflow } from '@/components';
import { Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ImageContainerStyle } from './Project.style';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = ['profile.project_1', 'profile.project_2', 'profile.project_3'];

  const ProjectBox = ({ title, index }: { title: string; index: number }) => (
    <Stack
      direction={'row'}
      alignItems={'center'}
      borderRadius={'4px'}
      padding={2}
      width={'100%'}
      spacing={2}
      border={(th) => `1px solid ${th.palette.grey[200]}`}
    >
      <ImageContainerStyle>
        <ImageIcon />
      </ImageContainerStyle>
      <Stack
        width={'calc(100% - 86px)'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack width={'calc(100% - 30px)'}>
          <TypographyOverflow title={t(title)} fontWeight={600} color={'grey.800'}>
            {t(title)}
          </TypographyOverflow>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <TypographyOverflow fontWeight={600} color="grey.400" fontSize={'0.75rem'}>
              {t('profile.project_n', { n: index + 1 })}
            </TypographyOverflow>
            <TypographyOverflow color="grey.400">&#128900;</TypographyOverflow>
            <TypographyOverflow sx={{ cursor: 'pointer' }} fontWeight={600} color="primary.main">
              {t('profile.see_project_details')}
            </TypographyOverflow>
          </Stack>
        </Stack>
        <Stack sx={{ svg: { fill: (th) => th.palette.grey[400] }, cursor: 'pointer' }}>
          <EditIcon />
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <CustomCard contentSx={{ padding: '15px' }}>
      <Stack spacing={3} height={{ sm: 520, xs: undefined }}>
        <Stack spacing={2}>
          <Typography color={'grey.800'} variant="h5" fontWeight={600}>
            {t('profile.all_projects')}
          </Typography>
          <Typography color="grey.400" fontSize={'0.75rem'}>
            {t('profile.all_projects_description')}
          </Typography>
        </Stack>
        <Grid container height={'100%'}>
          {projects.map((project, index) => (
            <Grid key={project} item xs={12} paddingBottom={2} justifyContent={'space-between'}>
              <ProjectBox title={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </CustomCard>
  );
};
