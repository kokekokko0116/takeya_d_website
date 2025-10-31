'use client';

import {
    Box,
    Container,
    Typography,
    Link as MuiLink,
    IconButton,
    Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.dark',
                color: 'white',
                pt: 8,
                pb: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* 会社情報 */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            {COMPANY_INFO.name}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                            創業70周年の信頼と実績
                            <br />
                            家電+リフォーム＝２倍の幸せ
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <LocationOnIcon sx={{ mr: 1, fontSize: 20, mt: 0.5 }} />
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                {COMPANY_INFO.address}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                {COMPANY_INFO.phone}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* ナビゲーション */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            サイトマップ
                        </Typography>
                        <Box>
                            {NAVIGATION_ITEMS.map((item) => (
                                <Box key={item.label} sx={{ mb: 1 }}>
                                    <MuiLink
                                        component={Link}
                                        href={item.path}
                                        color="inherit"
                                        underline="hover"
                                        sx={{ display: 'block', opacity: 0.9, '&:hover': { opacity: 1 } }}
                                    >
                                        {item.label}
                                    </MuiLink>
                                    {item.children && (
                                        <Box sx={{ ml: 2, mt: 0.5 }}>
                                            {item.children.map((child) => (
                                                <MuiLink
                                                    key={child.label}
                                                    component={Link}
                                                    href={child.path}
                                                    color="inherit"
                                                    underline="hover"
                                                    sx={{
                                                        display: 'block',
                                                        fontSize: '0.875rem',
                                                        opacity: 0.8,
                                                        mb: 0.5,
                                                        '&:hover': { opacity: 1 },
                                                    }}
                                                >
                                                    {child.label}
                                                </MuiLink>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* 営業時間・SNS */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            営業時間
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                            全店舗：10:00～19:00
                            <br />
                            定休日：水曜日（一部店舗を除く）
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 3 }}>
                            SNS
                        </Typography>
                        <Box>
                            <IconButton
                                component="a"
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'white', '&:hover': { opacity: 0.8 } }}
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

