import { createTheme } from '@mui/material/styles';

// タケヤ電機のブランドカラー
const theme = createTheme({
    palette: {
        primary: {
            main: '#0066CC', // 青色（信頼性・誠実さ）
            light: '#3385DB',
            dark: '#004A99',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FF6B35', // オレンジ色（活力・親しみやすさ）
            light: '#FF8C5E',
            dark: '#CC5528',
            contrastText: '#FFFFFF',
        },
        success: {
            main: '#2E7D32',
            light: '#4CAF50',
            dark: '#1B5E20',
        },
        info: {
            main: '#0288D1',
            light: '#03A9F4',
            dark: '#01579B',
        },
        warning: {
            main: '#F57C00',
            light: '#FF9800',
            dark: '#E65100',
        },
        error: {
            main: '#D32F2F',
            light: '#EF5350',
            dark: '#C62828',
        },
        background: {
            default: '#FAFAFA',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans JP"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontSize: '2.75rem',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontSize: '2.25rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        subtitle1: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.7,
        },
        button: {
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.75,
            textTransform: 'none',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    shadows: [
        'none',
        '0px 2px 4px rgba(0,0,0,0.05)',
        '0px 4px 8px rgba(0,0,0,0.08)',
        '0px 8px 16px rgba(0,0,0,0.1)',
        '0px 12px 24px rgba(0,0,0,0.12)',
        '0px 16px 32px rgba(0,0,0,0.14)',
        '0px 20px 40px rgba(0,0,0,0.16)',
        '0px 24px 48px rgba(0,0,0,0.18)',
        '0px 2px 4px rgba(0,0,0,0.05)',
        '0px 4px 8px rgba(0,0,0,0.08)',
        '0px 8px 16px rgba(0,0,0,0.1)',
        '0px 12px 24px rgba(0,0,0,0.12)',
        '0px 16px 32px rgba(0,0,0,0.14)',
        '0px 20px 40px rgba(0,0,0,0.16)',
        '0px 24px 48px rgba(0,0,0,0.18)',
        '0px 2px 4px rgba(0,0,0,0.05)',
        '0px 4px 8px rgba(0,0,0,0.08)',
        '0px 8px 16px rgba(0,0,0,0.1)',
        '0px 12px 24px rgba(0,0,0,0.12)',
        '0px 16px 32px rgba(0,0,0,0.14)',
        '0px 20px 40px rgba(0,0,0,0.16)',
        '0px 24px 48px rgba(0,0,0,0.18)',
        '0px 2px 4px rgba(0,0,0,0.05)',
        '0px 4px 8px rgba(0,0,0,0.08)',
        '0px 8px 16px rgba(0,0,0,0.1)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '12px 32px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0px 8px 16px rgba(0,0,0,0.12)',
                    },
                },
                contained: {
                    boxShadow: '0px 4px 8px rgba(0,0,0,0.08)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0px 4px 8px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 8px 16px rgba(0,0,0,0.12)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.08)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                    },
                },
            },
        },
    },
});

export default theme;

