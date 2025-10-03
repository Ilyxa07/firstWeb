import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  Alert,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Стилизованные компоненты в строительной тематике
const ConstructionBackground = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #2c3e50 0%, #4a6572 25%, #34495e 50%, #232f3e 75%, #1a2530 100%)',
  backgroundSize: '400% 400%',
  animation: 'constructionShift 15s ease infinite',
  zIndex: -1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(241, 196, 15, 0.1) 2%, transparent 10%),
      radial-gradient(circle at 80% 70%, rgba(230, 126, 34, 0.1) 2%, transparent 10%),
      radial-gradient(circle at 40% 80%, rgba(231, 76, 60, 0.1) 2%, transparent 10%),
      linear-gradient(45deg, transparent 48%, rgba(52, 73, 94, 0.2) 50%, transparent 52%)
    `,
    backgroundSize: '100px 100px, 150px 150px, 200px 200px, 60px 60px',
  },
  '@keyframes constructionShift': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
});

const ConstructionPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  background: 'rgba(44, 62, 80, 0.85)',
  backdropFilter: 'blur(12px)',
  border: '2px solid rgba(241, 196, 15, 0.3)',
  borderRadius: '8px',
  boxShadow: `
    0 8px 32px 0 rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -4px 8px rgba(0, 0, 0, 0.3)
  `,
  color: 'white',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db)',
    borderRadius: '8px 8px 0 0',
  },
}));

const ConstructionTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '600',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    backgroundColor: 'rgba(52, 73, 94, 0.4)',
    borderRadius: '6px',
    '& fieldset': {
      borderColor: 'rgba(241, 196, 15, 0.4)',
      borderWidth: '2px',
      borderRadius: '6px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(241, 196, 15, 0.7)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f39c12',
      boxShadow: '0 0 0 2px rgba(243, 156, 18, 0.2)',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontWeight: '500',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
    },
  },
});

const ConstructionButton = styled(Button)({
  background: 'linear-gradient(45deg, #e74c3c 0%, #f39c12 50%, #f1c40f 100%)',
  border: 0,
  borderRadius: '6px',
  boxShadow: '0 4px 15px 0 rgba(231, 76, 60, 0.3)',
  color: 'white',
  height: 50,
  padding: '0 30px',
  fontSize: '16px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover': {
    background: 'linear-gradient(45deg, #c0392b 0%, #e67e22 50%, #f1c40f 100%)',
    boxShadow: '0 6px 20px 0 rgba(231, 76, 60, 0.5)',
    transform: 'translateY(-2px)',
    '&::before': {
      left: '100%',
    },
  },
});

const ConstructionLink = styled(Link)({
  color: 'rgba(241, 196, 15, 0.9) !important',
  textDecoration: 'none !important',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '0%',
    height: '2px',
    background: '#f1c40f',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: '#ffffff !important',
    '&::after': {
      width: '100%',
    },
  },
});

// Декоративные строительные элементы
const SafetyCone = styled('div')({
  position: 'absolute',
  width: '40px',
  height: '60px',
  background: 'linear-gradient(45deg, #ff6b35, #f39c12)',
  clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '15px',
    left: '5px',
    right: '5px',
    height: '8px',
    background: 'white',
    borderRadius: '2px',
  },
});

const BrickWall = styled('div')({
  position: 'absolute',
  width: '120px',
  height: '80px',
  background: `
    linear-gradient(45deg, transparent 45%, rgba(231, 76, 60, 0.1) 46%, rgba(231, 76, 60, 0.1) 54%, transparent 55%),
    linear-gradient(-45deg, transparent 45%, rgba(231, 76, 60, 0.1) 46%, rgba(231, 76, 60, 0.1) 54%, transparent 55%)
  `,
  backgroundColor: 'rgba(52, 73, 94, 0.3)',
  border: '2px solid rgba(241, 196, 15, 0.2)',
});

function Registr() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistr = async () => {
    if (login.trim() === '') {
      setError('Логин не может быть пустым');
      return;
    }
    if (login.length >= 15) {
      setError('Логин слишком длинный');
      return;
    }
    if (login.length < 3) {
      setError('Логин слишком короткий');
      return;
    }
    if (password.trim() === '') {
      setError('Пароль не может быть пустым');
      return;
    }
    if (password.length >= 15) {
      setError('Пароль слишком длинный');
      return;
    }
    if (password.length < 6) {
      setError('Пароль слишком короткий');
      return;
    }
    if (!/\d/.test(password)) {
      setError('Пароль должен содержать хотя бы одну цифру');
      return;
    }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (response.ok) {
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Ошибка регистрации');
      }
    } catch (err) {
      setError('Ошибка регистрации');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/Product');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <ConstructionBackground />
      
      {/* Строительные декоративные элементы */}
      <SafetyCone
        sx={{
          top: '10%',
          left: '5%',
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
            '50%': { transform: 'scale(1.1) rotate(5deg)' },
          },
        }}
      />
      
      <SafetyCone
        sx={{
          bottom: '15%',
          right: '8%',
          animation: 'pulse 2s ease-in-out infinite 1s',
        }}
      />

      <BrickWall
        sx={{
          top: '20%',
          right: '5%',
          transform: 'rotate(15deg)',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'rotate(15deg) translateY(0px)' },
            '50%': { transform: 'rotate(12deg) translateY(-20px)' },
          },
        }}
      />

      <BrickWall
        sx={{
          bottom: '25%',
          left: '3%',
          transform: 'rotate(-10deg)',
          animation: 'float 6s ease-in-out infinite 0.5s',
        }}
      />

      <Container component="main" maxWidth="xs">
        <ConstructionPaper elevation={24}>
          <Typography 
  component="h1" 
  variant="h4" 
  align="center" 
  gutterBottom
  sx={{
    fontWeight: '900',
    marginBottom: '35px',
    color: '#f1c40f', // Твердый желтый цвет вместо градиента
    textShadow: `
      0 0 10px rgba(241, 196, 15, 0.5),
      2px 2px 4px rgba(0,0,0,0.8)
    `,
    letterSpacing: '2px',
    fontFamily: '"Arial Black", "Roboto", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    position: 'relative',
    '&::after': {
      content: '"🏗️"',
      position: 'absolute',
      right: '-40px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '2rem',
    }
  }}
>
  СТРОЙАККАУНТ
</Typography>
          
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                marginTop: '10px',
                borderRadius: '4px',
                backgroundColor: 'rgba(231, 76, 60, 0.9)',
                color: 'white',
                fontWeight: '600',
                border: '1px solid #c0392b',
              }}
            >
              ⚠️ {error}
            </Alert>
          )}
          
          <Box 
            component="form" 
            noValidate 
            onSubmit={(e) => { e.preventDefault(); handleRegistr(); }} 
            sx={{ mt: 3 }}
          >
            <ConstructionTextField
              margin="normal"
              required
              fullWidth
              label="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              sx={{ mb: 2.5 }}
            />
            <ConstructionTextField
              margin="normal"
              required
              fullWidth
              label="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2.5 }}
            />
            <ConstructionTextField
              margin="normal"
              required
              fullWidth
              label="Подтвердите пароль"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 3.5 }}
            />
            
            <ConstructionButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              Начать строительство
            </ConstructionButton>
            
            <Box textAlign="center">
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1.5, fontWeight: '500' }}>
                Уже построили аккаунт?
              </Typography>
            </Box>
          </Box>
        </ConstructionPaper>
      </Container>
    </Box>
  );
}

export default Registr;