import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const users = [
    { email: 'user1@example.com', password: '123' },
    { email: 'user2@example.com', password: '123' },
    { email: 'user3@example.com', password: '123' },
    { email: 'user4@example.com', password: '123' },
    { email: 'user5@example.com', password: '123' },
];

const Login1 = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    const userExists = users.find((user) => user.email === username);
    if (userExists) {
      setError('');
      setStep(2);
    } else {
      setError('User does not exist. Check email or sign up.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === username);
    if (user && user.password === password) {
      setError('');
      setSuccess(true);
    } else {
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            sx={{ backgroundColor: '#1995AD', '&:hover': { backgroundColor: '#A1D6E2' }, marginTop: '15px' }}
          >
            {step === 1 ? 'Next' : 'Login'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login1;
