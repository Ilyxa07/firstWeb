import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  Alert,
  Snackbar
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

const SecondaryButton = styled(Button)({
  background: 'rgba(52, 73, 94, 0.6)',
  border: '2px solid rgba(241, 196, 15, 0.4)',
  borderRadius: '6px',
  color: '#f1c40f',
  height: 50,
  padding: '0 30px',
  fontSize: '16px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(241, 196, 15, 0.1)',
    borderColor: '#f1c40f',
    boxShadow: '0 0 15px rgba(241, 196, 15, 0.3)',
    transform: 'translateY(-2px)',
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

const HardHatIcon = styled('div')({
  fontSize: '4rem',
  textAlign: 'center',
  marginBottom: '20px',
  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
});

function LogRegister() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
        credentials: 'include',
      });

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/Main');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Неверный логин или пароль');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error(error);
      setError('Ошибка подключения к серверу');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleRegister = () => {
    navigate('/registr');
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

      <Container component="main" maxWidth="sm">
        <ConstructionPaper elevation={24}>
          <Box className="construction-header" textAlign="center">
            <HardHatIcon>⛑️</HardHatIcon>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{
                fontWeight: '900',
                background: 'linear-gradient(45deg, #f1c40f, #f39c12, #e74c3c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '2px',
                fontFamily: '"Arial Black", "Roboto", sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                mb: 1,
              }}
            >
              СТРОЙКОНТРОЛЬ
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '500',
                mb: 4,
              }}
            >
              Доступ к строительной площадке
            </Typography>
          </Box>

          <form onSubmit={handleLogin}>
            <ConstructionTextField
              label="Логин"
              variant="outlined"
              fullWidth
              margin="normal"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              sx={{ mb: 3 }}
            />
            <ConstructionTextField
              label="Пароль"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 4 }}
            />
            
            <ConstructionButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mb: 2 }}
            >
              Войти на объект
            </ConstructionButton>
            
            <SecondaryButton
              variant="outlined"
              fullWidth
              onClick={handleRegister}
            >
              Создать аккаунт
            </SecondaryButton>
          </form>

          <Box textAlign="center" sx={{ mt: 3 }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              ⚠️ Вход разрешен только сотрудникам со спецдопуском
            </Typography>
          </Box>
        </ConstructionPaper>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          severity="error"
          sx={{
            backgroundColor: 'rgba(231, 76, 60, 0.9)',
            color: 'white',
            fontWeight: '600',
            borderRadius: '4px',
            border: '1px solid #c0392b',
          }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LogRegister;