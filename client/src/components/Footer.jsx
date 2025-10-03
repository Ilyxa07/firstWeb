import React from "react";
import { Box, Container, Typography, Link, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ConstructionIcon from "@mui/icons-material/Construction";

// Стилизованные компоненты в строительной тематике (аналогично Main)
const ConstructionFooter = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(44, 62, 80, 0.9)',
  backdropFilter: 'blur(12px)',
  borderTop: '2px solid rgba(241, 196, 15, 0.3)',
  color: 'white',
  padding: theme.spacing(2, 0),
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  boxShadow: `
    0 -4px 20px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1)
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db)',
  },
}));

const ConstructionLink = styled(Link)({
  color: '#f1c40f !important',
  fontWeight: '600',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    color: '#f39c12 !important',
    textShadow: '0 0 8px rgba(241, 196, 15, 0.5)',
    transform: 'translateY(-1px)',
  },
});

const ConstructionIconButton = styled(IconButton)({
  color: '#f1c40f',
  background: 'rgba(241, 196, 15, 0.1)',
  border: '1px solid rgba(241, 196, 15, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#f39c12',
    background: 'rgba(241, 196, 15, 0.2)',
    borderColor: '#f1c40f',
    boxShadow: '0 0 15px rgba(241, 196, 15, 0.3)',
    transform: 'translateY(-2px)',
  },
});

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  margin: theme.spacing(0.5, 0),
  padding: theme.spacing(0.5, 1),
  background: 'rgba(52, 73, 94, 0.4)',
  borderRadius: '6px',
  border: '1px solid rgba(241, 196, 15, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(52, 73, 94, 0.6)',
    borderColor: 'rgba(241, 196, 15, 0.4)',
    transform: 'translateY(-1px)',
  },
}));

const FooterTitle = styled(Typography)({
  fontWeight: '900',
  background: 'linear-gradient(45deg, #f1c40f, #f39c12)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
  fontFamily: '"Arial Black", "Roboto", sans-serif',
});

const Footer = () => {
  return (
    <ConstructionFooter component="footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-around"
          alignItems="center"
        >
          {/* Заголовок с иконкой */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ConstructionIcon sx={{ color: '#f1c40f', fontSize: 28 }} />
            <FooterTitle 
              variant="h6" 
              component="h2"
              sx={{ 
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              СТРОЙКОНТРОЛЬ
            </FooterTitle>
          </Box>

          {/* Телефон */}
          <ContactItem>
            <PhoneIcon sx={{ fontSize: 20, color: '#f1c40f' }} />
            <ConstructionLink 
              href="tel:+79775704409" 
              underline="hover"
            >
              +7 (977) 570-44-09
            </ConstructionLink>
          </ContactItem>

{/* Телеграм */}
          <ContactItem>
            <ConstructionIconButton
              component="a"
              href="https://t.me/Ilyshka_7"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <TelegramIcon />
            </ConstructionIconButton>
            <ConstructionLink
              href="https://t.me/Ilyshka_7"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Telegram
            </ConstructionLink>
          </ContactItem>

          {/* Email */}
          <ContactItem>
            <EmailIcon sx={{ fontSize: 20, color: '#f1c40f' }} />
            <ConstructionLink
              href="mailto:i.ney@yandex.ru"
              underline="hover"
            >
              i.ney@yandex.ru
            </ConstructionLink>
          </ContactItem>
        </Stack>

        {/* Дополнительная информация */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 1,
          borderTop: '1px solid rgba(241, 196, 15, 0.2)',
          pt: 1
        }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '500',
            }}
          >
            ⚠️ Система строительного контроля © 2024
          </Typography>
        </Box>
      </Container>
    </ConstructionFooter>
  );
};

export default Footer;