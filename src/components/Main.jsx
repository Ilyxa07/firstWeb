import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Snackbar,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Logout, Construction, Assignment, Schedule, Map } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Стилизованные компоненты в строительной тематике (аналогично LogRegister)
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
  padding: '30px',
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

const ConstructionCard = styled(Card)({
  background: 'rgba(44, 62, 80, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(241, 196, 15, 0.3)',
  borderRadius: '8px',
  color: 'white',
  height: '100%',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #f39c12, #f1c40f)',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px 0 rgba(241, 196, 15, 0.2)',
    borderColor: 'rgba(241, 196, 15, 0.6)',
  },
});

const ConstructionButton = styled(Button)({
  background: 'linear-gradient(45deg, #e74c3c 0%, #f39c12 50%, #f1c40f 100%)',
  border: 0,
  borderRadius: '6px',
  boxShadow: '0 4px 15px 0 rgba(231, 76, 60, 0.3)',
  color: 'white',
  padding: '10px 20px',
  fontSize: '14px',
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
  padding: '10px 20px',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransition: 'uppercase',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(241, 196, 15, 0.1)',
    borderColor: '#f1c40f',
    boxShadow: '0 0 15px rgba(241, 196, 15, 0.3)',
    transform: 'translateY(-2px)',
  },
});

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

const StyledAppBar = styled(AppBar)({
  background: 'rgba(44, 62, 80, 0.9)',
  backdropFilter: 'blur(10px)',
  borderBottom: '2px solid rgba(241, 196, 15, 0.3)',
});

// Моковые данные объектов
const mockObjects = [
  {
    id: 1,
    name: 'ЖК "Северный"',
    address: 'ул. Строителей, 15',
    polygon: '55.7558, 37.6173',
    works: ['Фундаментные работы', 'Монтаж конструкций', 'Отделочные работы'],
    schedule: '2024-01-15 - 2024-12-20',
    status: 'active',
    responsible: 'Иванов А.С.',
    startDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'ТЦ "Центральный"',
    address: 'пр. Ленина, 42',
    polygon: '55.7517, 37.6178',
    works: ['Электромонтаж', 'Сантехнические работы', 'Благоустройство'],
    schedule: '2024-02-01 - 2024-10-30',
    status: 'planned',
    responsible: null,
    startDate: '2024-02-01'
  },
  {
    id: 3,
    name: 'Школа №15',
    address: 'ул. Школьная, 10',
    polygon: '55.7500, 37.6200',
    works: ['Реконструкция фасада', 'Ремонт кровли', 'Замена окон'],
    schedule: '2024-03-01 - 2024-08-31',
    status: 'pending',
    responsible: null,
    startDate: '2024-03-01'
  }
];

function Main() {
  const navigate = useNavigate();
  const [objects, setObjects] = useState(mockObjects);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  const [contractor, setContractor] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    // Проверка аутентификации
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const handleActivateObject = (object) => {
    setSelectedObject(object);
    setOpenDialog(true);
  };

const handleSubmitActivation = () => {
    if (!contractor.trim()) {
      setSnackbar({
        open: true,
        message: 'Введите ФИО прораба',
        severity: 'error'
      });
      return;
    }

    // Обновляем объект
    const updatedObjects = objects.map(obj =>
      obj.id === selectedObject.id
        ? { ...obj, status: 'active', responsible: contractor }
        : obj
    );

    setObjects(updatedObjects);
    setOpenDialog(false);
    setContractor('');
    setSnackbar({
      open: true,
      message: 'Объект активирован! Чек-лист отправлен инспектору.',
      severity: 'success'
    });
  };

  const getStatusChip = (status) => {
    const statusConfig = {
      active: { color: '#2ecc71', label: 'АКТИВЕН' },
      planned: { color: '#3498db', label: 'ПЛАНИРУЕТСЯ' },
      pending: { color: '#f39c12', label: 'ОЖИДАЕТ АКТИВАЦИИ' }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <Chip
        label={config.label}
        size="small"
        sx={{
          backgroundColor: config.color,
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px',
        }}
      />
    );
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
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

      <StyledAppBar position="static">
        <Toolbar>
          <Construction sx={{ mr: 2, color: '#f1c40f' }} />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: '900',
              background: 'linear-gradient(45deg, #f1c40f, #f39c12)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            СТРОЙКОНТРОЛЬ
          </Typography>
          <IconButton 
            color="inherit" 
            onClick={handleLogout}
            sx={{ color: '#f1c40f' }}
          >
            <Logout />
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      <Container sx={{ py: 4 }}>
        <ConstructionPaper>
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
              textAlign: 'center',
              mb: 4,
            }}
          >
            ОБЪЕКТЫ СТРОИТЕЛЬСТВА
          </Typography>

<Grid container spacing={3}>
            {objects.map((object) => (
              <Grid item xs={12} md={6} lg={4} key={object.id}>
                <ConstructionCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: '#f1c40f', fontWeight: 'bold' }}>
                        {object.name}
                      </Typography>
                      {getStatusChip(object.status)}
                    </Box>
                    
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                      📍 {object.address}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ color: '#f39c12', fontWeight: 'bold' }}>
                        <Map sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
                        Полигон:
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        {object.polygon}
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ color: '#f39c12', fontWeight: 'bold' }}>
                        <Assignment sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
                        Состав работ:
                      </Typography>
                      {object.works.map((work, index) => (
                        <Typography key={index} variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          • {work}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ color: '#f39c12', fontWeight: 'bold' }}>
                        <Schedule sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
                        Сетевой график:
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        {object.schedule}
                      </Typography>
                    </Box>

                    {object.responsible && (
                      <Box>
                        <Typography variant="caption" sx={{ color: '#f39c12', fontWeight: 'bold' }}>
                          Ответственный:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          {object.responsible}
                        </Typography>
                      </Box>
                    )}
                  </CardContent>

                  <CardActions sx={{ padding: 2, pt: 0 }}>
                    {object.status === 'pending' && (
                      <ConstructionButton
                        fullWidth
                        onClick={() => handleActivateObject(object)}
                      >
                        Активировать объект
                      </ConstructionButton>
                    )}
                    {object.status === 'active' && (
                      <SecondaryButton fullWidth>
                        Просмотр деталей
                      </SecondaryButton>
                    )}
                    {object.status === 'planned' && (
                      <Button 
                        fullWidth 
                        disabled
                        sx={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Ожидает начала работ
                      </Button>
                    )}
                  </CardActions>
                </ConstructionCard>
              </Grid>
            ))}
          </Grid>
        </ConstructionPaper>
      </Container>

{/* Диалог активации объекта */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          sx: {
            background: 'rgba(44, 62, 80, 0.95)',
            backdropFilter: 'blur(12px)',
            color: 'white',
            border: '2px solid rgba(241, 196, 15, 0.3)',
          }
        }}
      >
        <DialogTitle sx={{ color: '#f1c40f', fontWeight: 'bold' }}>
          Активация объекта
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2, color: 'rgba(255,255,255,0.8)' }}>
            Вы становитесь ответственным за объект "{selectedObject?.name}"
          </Typography>
          <ConstructionTextField
            autoFocus
            margin="dense"
            label="ФИО прораба (ответственный со стороны подрядчика)"
            type="text"
            fullWidth
            variant="outlined"
            value={contractor}
            onChange={(e) => setContractor(e.target.value)}
          />
          <Alert severity="info" sx={{ mt: 2, backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
            После активации будет создан чек-лист акта открытия объекта для отправки инспектору
          </Alert>
        </DialogContent>
        <DialogActions>
          <SecondaryButton onClick={() => setOpenDialog(false)}>
            Отмена
          </SecondaryButton>
          <ConstructionButton onClick={handleSubmitActivation}>
            Активировать и отправить
          </ConstructionButton>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          severity={snackbar.severity}
          sx={{
            backgroundColor: snackbar.severity === 'success' ? 'rgba(46, 204, 113, 0.9)' : 'rgba(231, 76, 60, 0.9)',
            color: 'white',
            fontWeight: '600',
            borderRadius: '4px',
            border: snackbar.severity === 'success' ? '1px solid #27ae60' : '1px solid #c0392b',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}


export default Main;