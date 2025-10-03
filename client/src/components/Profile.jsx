import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Chip,
  Stack,
  Button,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  styled
} from "@mui/material";
import {
  Construction,
  Engineering,
  LocationOn,
  Phone,
  Email,
  Telegram,
  Work,
  CalendarToday,
  Security,
  Build
} from "@mui/icons-material";

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
  padding: '30px',
  background: 'rgba(44, 62, 80, 0.85)',
  backdropFilter: 'blur(12px)',
  border: '2px solid rgba(241, 196, 15, 0.3)',
  borderRadius: '12px',
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
    borderRadius: '12px 12px 0 0',
  },
}));

const ConstructionAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  border: '4px solid #f1c40f',
  boxShadow: '0 4px 20px rgba(241, 196, 15, 0.3)',
  background: 'linear-gradient(45deg, #2c3e50, #34495e)',
});

const ConstructionChip = styled(Chip)({
  background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
  color: 'white',
  fontWeight: '600',
  '& .MuiChip-icon': {
    color: 'white',
  },
});

const SkillProgress = styled(LinearProgress)({
  height: 12,
  borderRadius: 6,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '& .MuiLinearProgress-bar': {
    background: 'linear-gradient(45deg, #f1c40f, #f39c12)',
    borderRadius: 6,
  },
});

const ConstructionButton = styled(Button)({
  background: 'linear-gradient(45deg, #e74c3c 0%, #f39c12 50%, #f1c40f 100%)',
  border: 0,
  borderRadius: '6px',
  boxShadow: '0 4px 15px 0 rgba(231, 76, 60, 0.3)',
  color: 'white',
  padding: '12px 30px',
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #c0392b 0%, #e67e22 50%, #f1c40f 100%)',
    boxShadow: '0 6px 20px 0 rgba(231, 76, 60, 0.5)',
    transform: 'translateY(-2px)',
  },
});

const InfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px',
  background: 'rgba(52, 73, 94, 0.4)',
  borderRadius: '8px',
  border: '1px solid rgba(241, 196, 15, 0.2)',
  marginBottom: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(52, 73, 94, 0.6)',
    borderColor: 'rgba(241, 196, 15, 0.4)',
    transform: 'translateX(4px)',
  },
});

const Profile = () => {
  const skills = [
    { name: "Управление проектами", level: 90 },
    { name: "Чтение чертежей", level: 85 },
    { name: "Работа с техникой", level: 78 },
    { name: "Бригадирство", level: 92 },
    { name: "Смета работ", level: 88 },
    { name: "Техника безопасности", level: 95 }
  ];

  const currentProjects = [
    { name: "ЖК 'Строитель'", progress: 75, status: "В работе" },
    { name: "ТЦ 'Мегаполис'", progress: 100, status: "Завершен" },
    { name: "Школа №15", progress: 30, status: "В работе" }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: '20px',
        position: 'relative',
      }}
    >
      <ConstructionBackground />
      
      <Container maxWidth="lg">
        {/* Основная информация */}
        <ConstructionPaper sx={{ mb: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <ConstructionAvatar>
                <Engineering sx={{ fontSize: 60 }} />
              </ConstructionAvatar>
              <Typography 
                variant="h4" 
                sx={{ 
                  mt: 2,
                  fontWeight: '900',
                  background: 'linear-gradient(45deg, #f1c40f, #f39c12)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Илья Нейман
              </Typography>
              <ConstructionChip
                icon={<Construction />}
                label="Строитель-прораб"
                sx={{ mt: 1 }}
              />
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom sx={{ color: '#f1c40f', fontWeight: '600' }}>
                Обо мне
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
                Опытный прораб с 8-летним стажем в строительной отрасли. 
                Специализируюсь на управлении крупными строительными проектами, 
                контроле качества работ и обеспечении безопасности на объекте.
              </Typography>
              
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <ConstructionChip icon={<Work />} label="8 лет опыта" />
                <ConstructionChip icon={<Security />} label="Допуск СРО" />
                <ConstructionChip icon={<Build />} label="15+ проектов" />
              </Stack>
            </Grid>
          </Grid>
        </ConstructionPaper>

        <Grid container spacing={4}>
          {/* Контакты и информация */}
          <Grid item xs={12} md={4}>
            <ConstructionPaper sx={{ height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#f1c40f', fontWeight: '600' }}>
                Контактная информация
              </Typography>
              
              <InfoItem>
                <Phone sx={{ color: '#f1c40f' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Телефон
                  </Typography>
                  <Typography variant="body1">+7 (977) 570-44-09</Typography>
                </Box>
              </InfoItem>

              <InfoItem>
                <Email sx={{ color: '#f1c40f' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Email
                  </Typography>
                  <Typography variant="body1">i.ney@yandex.ru</Typography>
                </Box>
              </InfoItem>

              <InfoItem>
                <Telegram sx={{ color: '#f1c40f' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Telegram
                  </Typography>
                  <Typography variant="body1">@Ilyshka_7</Typography>
                </Box>
              </InfoItem>

              <InfoItem>
                <LocationOn sx={{ color: '#f1c40f' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Местоположение
                  </Typography>
                  <Typography variant="body1">Москва, РФ</Typography>
                </Box>
              </InfoItem>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <ConstructionButton fullWidth>
                  Связаться со мной
                </ConstructionButton>
              </Box>
            </ConstructionPaper>
          </Grid>

          {/* Навыки */}
          <Grid item xs={12} md={4}>
            <ConstructionPaper sx={{ height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#f1c40f', fontWeight: '600' }}>
                Профессиональные навыки
              </Typography>
              
              {skills.map((skill, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#f1c40f', fontWeight: '600' }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <SkillProgress variant="determinate" value={skill.level} />
                </Box>
              ))}
            </ConstructionPaper>
          </Grid>

          {/* Текущие проекты */}
          <Grid item xs={12} md={4}>
            <ConstructionPaper sx={{ height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#f1c40f', fontWeight: '600' }}>
                Текущие проекты
              </Typography>
              
              {currentProjects.map((project, index) => (
                <Card 
                  key={index} 
                  sx={{ 
                    mb: 2, 
                    background: 'rgba(52, 73, 94, 0.4)',
                    border: '1px solid rgba(241, 196, 15, 0.2)',
                    color: 'white'
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarToday sx={{ fontSize: 16, mr: 1, color: '#f1c40f' }} />
                      <Typography variant="body2" sx={{ color: project.status === "Завершен" ? '#2ecc71' : '#f39c12' }}>
                        {project.status}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ flexGrow: 1, mr: 1 }}>
                        <SkillProgress variant="determinate" value={project.progress} />
                      </Box>
                      <Typography variant="body2" sx={{ color: '#f1c40f', fontWeight: '600', minWidth: 35 }}>
                        {project.progress}%
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <ConstructionButton fullWidth>
                  Все проекты
                </ConstructionButton>
              </Box>
            </ConstructionPaper>
          </Grid>
        </Grid>

        {/* Статистика */}
        <ConstructionPaper sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#f1c40f', fontWeight: '600', textAlign: 'center' }}>
            Статистика за 2024 год
          </Typography>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ color: '#f1c40f', fontWeight: '900' }}>3</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Активных проекта</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ color: '#f1c40f', fontWeight: '900' }}>156</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Рабочих дней</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ color: '#f1c40f', fontWeight: '900' }}>0</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Происшествий</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ color: '#f1c40f', fontWeight: '900' }}>98%</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Качество работ</Typography>
            </Grid>
          </Grid>
        </ConstructionPaper>
      </Container>
    </Box>
  );
};

export default Profile;