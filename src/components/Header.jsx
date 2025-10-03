import React from "react";
import { Box, Button, IconButton, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ConstructionIcon from "@mui/icons-material/Construction";

// Стилизованные компоненты в строительной тематике
const ConstructionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: 90,
  backgroundColor: 'rgba(44, 62, 80, 0.9)',
  backdropFilter: 'blur(12px)',
  borderBottom: '2px solid rgba(241, 196, 15, 0.3)',
  position: 'relative',
  boxShadow: `
    0 4px 20px 0 rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1)
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db)',
  },
}));

const ConstructionNavButton = styled(Button)({
  fontWeight: 700,
  fontSize: "18px",
  textTransform: "uppercase",
  color: "hsla(0, 0%, 100%, 0.6)",
  background: 'rgba(52, 73, 94, 0.4)',
  border: '1px solid rgba(241, 196, 15, 0.2)',
  borderRadius: '6px',
  padding: '12px 24px',
  margin: '0 8px',
  transition: 'all 0.3s ease',
  letterSpacing: '1px',
  '&:hover': {
    color: "#ffffff",
    background: 'rgba(241, 196, 15, 0.1)',
    borderColor: '#f1c40f',
    boxShadow: '0 0 15px rgba(241, 196, 15, 0.3)',
    transform: 'translateY(-2px)',
  },
  '&.active': {
    color: "#ffffff",
    background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
    borderColor: '#f39c12',
    boxShadow: '0 4px 15px 0 rgba(243, 156, 18, 0.4)',
  },
});

const ConstructionIconButton = styled(IconButton)({
  color: '#f1c40f',
  background: 'rgba(241, 196, 15, 0.1)',
  border: '1px solid rgba(241, 196, 15, 0.3)',
  borderRadius: '6px',
  padding: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#f39c12',
    background: 'rgba(241, 196, 15, 0.2)',
    borderColor: '#f1c40f',
    boxShadow: '0 0 15px rgba(241, 196, 15, 0.3)',
    transform: 'translateY(-2px)',
  },
});

const HeaderLogo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '8px 16px',
  background: 'rgba(52, 73, 94, 0.4)',
  borderRadius: '6px',
  border: '1px solid rgba(241, 196, 15, 0.2)',
});

const LogoText = styled('span')({
  fontWeight: '900',
  background: 'linear-gradient(45deg, #f1c40f, #f39c12)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1.5px',
  fontFamily: '"Arial Black", "Roboto", sans-serif',
  fontSize: '20px',
});

const Header = () => {
  return (
    <ConstructionHeader component="header">
      {/* Логотип */}
      <HeaderLogo>
        <ConstructionIcon sx={{ color: '#f1c40f', fontSize: 28 }} />
        <LogoText>СТРОЙКОНТРОЛЬ</LogoText>
      </HeaderLogo>

      {/* Навигация */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ConstructionNavButton
          component={NavLink}
          to="/Main"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ГЛАВНАЯ
        </ConstructionNavButton>

        <ConstructionNavButton
          component={NavLink}
          to="/Product"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ПРОДУКТ
        </ConstructionNavButton>

        <ConstructionNavButton
          component={NavLink}
          to="/Profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ПРОФИЛЬ
        </ConstructionNavButton>
      </Box>

      {/* Кнопка поиска */}
      <ConstructionIconButton>
        <SearchIcon fontSize="large" />
      </ConstructionIconButton>
    </ConstructionHeader>
  );
};

export default Header;