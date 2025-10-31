'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { KEY_MESSAGES } from '@/lib/constants';

export default function HeroSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center', color: 'white' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    opacity: 0.95,
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {KEY_MESSAGES.anniversary}
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    mb: 3,
                                    fontWeight: 800,
                                    fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                    lineHeight: 1.2,
                                }}
                            >
                                {KEY_MESSAGES.hero}
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 5,
                                    fontWeight: 500,
                                    fontSize: { xs: '1.25rem', md: '1.75rem', lg: '2rem' },
                                    opacity: 0.95,
                                }}
                            >
                                {KEY_MESSAGES.subHero}
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 6,
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                    maxWidth: '600px',
                                    mx: 'auto',
                                    opacity: 0.9,
                                    lineHeight: 1.8,
                                }}
                            >
                                香川県で愛される地域密着型サービス
                                <br />
                                家電販売からリフォームまで、暮らしのすべてをサポートします
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    endIcon={<ArrowForwardIcon />}
                                    component={Link}
                                    href="/services"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.125rem',
                                        fontWeight: 700,
                                        boxShadow: '0 8px 24px rgba(255,107,53,0.4)',
                                        '&:hover': {
                                            boxShadow: '0 12px 32px rgba(255,107,53,0.5)',
                                        },
                                    }}
                                >
                                    サービスを見る
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={Link}
                                    href="/stores"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.125rem',
                                        fontWeight: 700,
                                        color: 'white',
                                        borderColor: 'white',
                                        '&:hover': {
                                            borderColor: 'white',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                        },
                                    }}
                                >
                                    店舗を探す
                                </Button>
                            </Stack>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>

            {/* 装飾的な要素 */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'white',
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 50%, 0 100%)',
                }}
            />
        </Box>
    );
}

