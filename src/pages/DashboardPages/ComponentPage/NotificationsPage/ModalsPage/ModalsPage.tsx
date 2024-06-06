import { CustomCard, CustomModal } from '@/components';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ModalsPage = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenStatic, setIsOpenStatic] = useState(false);

  return (
    <>
      <CustomModal open={isOpen} handleClose={() => setIsOpen(false)}>
        <Stack minHeight={100}>
          <Typography>{t('modal.your_reading_text_in_modal')}</Typography>
        </Stack>
      </CustomModal>
      <CustomModal open={isOpenStatic}>
        <Stack minHeight={100} justifyContent={'space-between'}>
          <Typography>{t('modal.you_can_t_close')}</Typography>
          <Stack spacing={1} direction={'row'} justifyContent={'flex-end'}>
            <Button variant="contained">{t('common.understood')}</Button>
            <Button variant="contained" color="error" onClick={() => setIsOpenStatic(false)}>
              {t('common.close')}
            </Button>
          </Stack>
        </Stack>
      </CustomModal>
      <CustomModal
        title="card.turtle_facts"
        open={isOpenTitle}
        handleClose={() => setIsOpenTitle(false)}
      >
        <Stack minHeight={100} justifyContent={'space-between'}>
          <Typography>{t('card.turtle_facts_content')}</Typography>
          <Stack spacing={1} direction={'row'} justifyContent={'flex-end'}>
            <Button variant="outlined">🐸</Button>
            <Button variant="outlined">🐢</Button>
          </Stack>
        </Stack>
      </CustomModal>
      <CustomCard header="modal.basic_modal">
        <Stack
          alignItems={'center'}
          direction={'row'}
          flexWrap={'wrap'}
          gap={1}
          justifyContent={'center'}
        >
          <Button variant="contained" onClick={() => setIsOpen(true)}>
            {t('modal.open_modal')}
          </Button>
          <Button variant="contained" onClick={() => setIsOpenStatic(true)}>
            {t('modal.open_static_modal')}
          </Button>
          <Button variant="contained" onClick={() => setIsOpenTitle(true)}>
            {t('modal.modal_with_title')}
          </Button>
        </Stack>
      </CustomCard>
    </>
  );
};

export default ModalsPage;
