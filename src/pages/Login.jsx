import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import apiService from '../services/apiService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    window.location.href = '/';

    // try {
    //   const credentials = { username, password };
    //   const response = await apiService.login(credentials);
    //   console.log('Login successful!', response);
    // } catch (error) {
    //   console.error('Error during login:', error);
    // }

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
