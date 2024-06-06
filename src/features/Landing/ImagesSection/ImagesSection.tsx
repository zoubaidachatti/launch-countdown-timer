import { Grid } from '@mui/material';
import { images } from './ImagesSection.constants';

export const ImagesSection = () => {
  return (
    <Grid container>
      {images.map((src, index) => (
        <Grid key={`image_${index}`} xs={6} sm={3}>
          <img src={src} alt={src} style={{ width: '100%', height: '100%' }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImagesSection;
