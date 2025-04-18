import React from 'react';
import { Box, Flex, Text, Image } from '@mantine/core';
import { NavLink, useLocation } from 'react-router-dom';
import homeIcon from '@/assets/icons/icon_home_inactive.svg';
import allIcon from '@/assets/icons/icon_all_inactive.svg';
import looksIcon from '@/assets/icons/icon_my_looks_inactive.svg';
import profileIcon from '@/assets/icons/icon_profile_inactive.svg';

const navItems = [
  { label: 'Home', icon: homeIcon, path: '/' },
  { label: 'All', icon: allIcon, path: '/all' },
  { label: 'My looks', icon: looksIcon, path: '/my-looks' },
  { label: 'Profile', icon: profileIcon, path: '/profile' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <Box
      pos="fixed"
      bottom={0}
      left={0}
      w="100%"
      bg="white"
      px="md"
      py="xs"
      sx={{ boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)', zIndex: 1000 }}
    >
      <Flex justify="space-around" align="center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: isActive ? '#C8102E' : '#333',
                textDecoration: 'none',
              }}
            >
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <Text size="xs" fw={isActive ? 700 : 400}>
                {item.label}
              </Text>
            </NavLink>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Navbar;
