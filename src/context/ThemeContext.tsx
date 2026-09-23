import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeConfig {
  id: string;
  name: string;
  accent: string;
  isDark: boolean;
}

export const LIGHT_THEME: ThemeConfig = {
  id: 'light',
  name: 'Light Monochrome',
  accent: '#8fc33b',
  isDark: false,
};

export const DARK_THEME: ThemeConfig = {
  id: 'dark',
  name: 'Dark Obsidian',
  accent: '#8fc33b',
  isDark: true,
};

interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  activeThemeConfig: ThemeConfig;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  themeModalOpen: boolean;
  setThemeModalOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mihir-portfolio-theme') as ThemeMode;
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });
  const [themeModalOpen, setThemeModalOpen] = useState(false);

  const isDark = theme === 'dark';
  const activeThemeConfig = isDark ? DARK_THEME : LIGHT_THEME;

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mihir-portfolio-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        activeThemeConfig,
        toggleTheme,
        setTheme,
        themeModalOpen,
        setThemeModalOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

