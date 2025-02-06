import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './Login.css';

// Predefined user data
const users = [
  { email: 'user1@example.com', password: '123' },
  { email: 'user2@example.com', password: '123' },
  { email: 'user3@example.com', password: '123' },
  { email: 'user4@example.com', password: '123' },
  { email: 'user5@example.com', password: '123' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email);
    if (!user) {
      setError('User does not exist');
    } else if (user.password !== password) {
      setError('Incorrect password');
      
    } else {
      setError('');
      alert('Login successful');
      console.log(user);
      // Proceed with further actions upon successful login
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
        component="form"
        onSubmit={handleSubmit}
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
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#1995AD', '&:hover': { backgroundColor: '#A1D6E2' } }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
