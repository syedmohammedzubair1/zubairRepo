// src/MultiStepLogin.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

import './Login1.css';

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

  const handleNext = () => {
    const userExists = users.find((user) => user.email == username);
    if (userExists) {
      setError('');
      setStep(2);
    } else {
      setError('User does not exist');
    }
  };

  const handleLogin = () => {
    const user = users.find((user) => user.email === username);
    if (user && user.password === password) {
      setError('');
      setSuccess(true);
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#F1F1F2',
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
        }}
      >
        <Typography variant="h5" align="center" color="#1995AD">
          {step === 1 ? 'Enter Username' : 'Enter Password'}
        </Typography>
        {step === 1 ? (
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        ) : (
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        {success && (
          <Typography color="primary" align="center">
            Login successful!
          </Typography>
        )}
        {step === 1 ? (
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: '#1995AD', '&:hover': { backgroundColor: '#A1D6E2' } }}
            onClick={handleNext}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: '#1995AD', '&:hover': { backgroundColor: '#A1D6E2' } }}
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Login1;
