import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f9f9f9' },
    primary: { main: '#0066cc' },
    error: { main: '#e63946' },
    info: { main: '#1d3557' },
    secondary: { main: '#457b9d' }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 }
  }
});

export default theme;
