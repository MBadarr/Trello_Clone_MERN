// import Register from '../Register/Register';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from 'react';

const defaultTheme = createTheme();

const Registration = () => {

    const [toggle, setToggle] = useState(false);


    const handleToggle = () => {
        console.log('clicked');
        setToggle(!toggle);
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid
                container
                component='main'
                sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square>
                    <Box
                        sx={{
                            my: 12,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // marginTop: '140px',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            component='h1'
                            variant='h2'>
                            Todo App
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            my: 12,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>


                        <Typography
                            component='h1'
                            variant='h5'>
                            {toggle ? "Sign Up" : "Sign in"}
                        </Typography>
                        <Box
                            component='form'
                            noValidate
                            // onSubmit={handleSubmit}
                            sx={{mt: 1}}>
                            {toggle && <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='name'
                                label='Full Name'
                                name='name'
                                autoComplete='name'
                                autoFocus
                            />}
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                autoFocus
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                            />
                            {toggle && <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='confirm_password'
                                label='Confirm Password'
                                type='confirm_password'
                                id='confirm_password'
                                autoComplete='confirm_password'/>}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value='remember'
                                        color='primary'
                                    />
                                }
                                label='Remember me'
                            />
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{mt: 3, mb: 2}}>
                                {toggle ? "Sign Up" : "Sign In"}
                            </Button>
                            <Grid container>
                                <Grid
                                    item
                                    xs>
                                    <Link
                                        href='#'
                                        variant='body2'>
                                        {toggle ? "" : "Forgot password?"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        href='#'
                                        variant='body2'
                                        onClick={handleToggle}
                                    >
                                        {toggle ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Registration;
