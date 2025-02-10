import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { UserContext } from '../context/UserContext.jsx'; // Import the context

const Login1 = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { validateEmail, Login } = useContext(UserContext);

  const handleNext = async (e) => {
    e.preventDefault();
    try {
      const userExists = await validateEmail(email);
      if (userExists) {
        setError('');
        setStep(2); // Move to password step if email exists
      } else {
        setError('User does not exist. Check email or sign up.');
      }
    } catch (err) {
      setError('Error checking email.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await Login(email, password);
      setError('');
      setSuccess(true);
    } catch (err) {
      setError('Incorrect password');
      setSuccess(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#FFFFFF',
          position: 'relative',
        }}
      >
        {step === 2 && (
          <Button
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              color: '#1995AD',
              textTransform: 'none',
            }}
            onClick={() => setStep(1)}
          >
            ← Back
          </Button>
        )}

        <Typography variant="h5" align="center" color="#1995AD">
          {step === 1 ? 'Enter Email' : 'Enter Password'}
        </Typography>

        <form onSubmit={step === 1 ? handleNext : handleLogin}>
          {step === 1 ? (
            <>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
              <Typography align="end">
                <Link href="#" color="#1995AD" underline="hover">
                  For New one Contact us?
                </Link>
              </Typography>
            </>
          ) : (
            <>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
              {success && (
                <Typography color="success" align="center">
                  Login successful!
                </Typography>
              )}
              <Typography align="end">
                <Link href="#" color="#1995AD" underline="hover">
                  Forgot password?
                </Link>
              </Typography>
            </>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1995AD',
              '&:hover': { backgroundColor: '#A1D6E2' },
              marginTop: '15px',
            }}
          >
            {step === 1 ? 'Next' : 'Login'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login1;
