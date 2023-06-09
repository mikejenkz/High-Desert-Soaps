
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import withRoot from './modules/withRoot';
import React, { useState, useEffect } from 'react';
import { UserContext } from './App';
import { useContext } from 'react';
import AppFooter from './modules/views/AppFooter';
import axios from 'axios';

// function Copyright(props:any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       {/* <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '} */}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

const randomFact = async (event:any) => {
  event.preventDefault();
  let response = await axios.get('/randomfact/')
  console.log(response.data)

};

const SignIn = () => {
  const [data, setData] = useState([]);
  const {user}:any = useContext(UserContext)
  const {setUser}:any = useContext(UserContext)


  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setData(data.slip));
  }, []);

  console.log(data)



  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
    let response = await axios.post('../user/login/', data)
    console.log(response.data.email)
    console.log(response.data.firstName)
    setUser({username: response.data.email, first_name: response.data.firstName})

  };

const logOut = async(event:any) => {
    event.preventDefault();
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
      alert("You Have Logged Out")
        setUser({user: "Logged Out"})
    }
} 
  console.log(user)


  // const randomFact = async (event:any) => {
  //   event.preventDefault();
  //   let response = await axios.post('/randomfact/')
  //   console.log(response.data)
  
  // };  

  
  if (user.username != undefined){



    
    return(
      <div>
        <h1 style={{color:'black'}}>Welcome {user.first_name} </h1>
        <h1 style={{color:'black'}}> Thank you for being a member of our community.</h1>
        <h1 style={{color:'black'}}>Soap Advice: {data.advice}</h1>
        <Link to = '../adminfunc'> <button> Admin Page</button></Link>

        <Button
              fullWidth
              onClick = {logOut}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logout
            </Button>
            <AppFooter/>
      </div>
    );
  }

    return (
      <> 
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to = "/">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to ="/sign-up/">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
         {/* <Copyright sx={{ mt: 8, mb: 4 }} />  */}
      </Container>
      <AppFooter/>
      </>
  );
}

export default withRoot(SignIn);
