import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import axios from 'axios';


function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (event:any) => {
    alert("We have added you to the email distro.")
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
    let response = await axios.post('/user/check/', data)
    console.log(response.data.email)

    

  };



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive Updates
              </Typography>
              <Typography variant="h5">
                We will inform you where we will be set up in the community and new product releases.
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                id="email"
                name='email'
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          {/* <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          /> */}
          <Box
            component="img"
            src="https://th.bing.com/th/id/R.571f7b3c1ef0e8a5e9945724c77acb4f?rik=REH1k0KL%2fGlJHw&riu=http%3a%2f%2fsunlitspaces.com%2fwp-content%2fuploads%2f2018%2f12%2fshutterstock_564702328.jpg&ehk=6R%2btE6UIyhJ4OYejVCs6D9lYGyHAZPLwmAy0KOrSL2M%3d&risl=&pid=ImgRaw&r=0"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default ProductCTA;
