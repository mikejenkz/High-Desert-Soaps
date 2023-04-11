import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        {/* <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://github.com/mikejenkz/images/blob/main/customerService.png?raw=true"
                alt="image"
                sx={{ height: 175, width: 350 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Quality
              </Typography>
              <Typography variant="h5">
                {
                  'We are committed to providing high-quality, handmade soap. We use only the finest natural ingredients and we take the time to make each bar of soap by hand'
                }
                {
                  ' We use only the finest natural ingredients and we take the time to make each bar of soap by hand.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://github.com/mikejenkz/images/blob/main/Desert%20Soap.png?raw=true"
                alt="graph"
                sx={{ height: 175, width: 350 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Customer service
              </Typography>
              <Typography variant="h5">
                {
                  'We are committed to providing excellent customer service. We want our customers to be happy with their purchase and we are always available to answer any questions or concerns.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://i.pinimg.com/originals/5b/fc/b4/5bfcb49a8566b430941d7190b4e646a7.jpg"
                alt="clock"
                sx={{ height: 175, width: 350 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Community
              </Typography>
              <Typography variant="h5">
                {'We believe that our soap can make a positive impact on the El Paso community. We are committed to giving back to the community and we support local businesses and organizations.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
