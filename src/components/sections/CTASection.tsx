'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';

export default function CTASection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, #FF6B35 0%, #CC5528 100%)',
                color: 'white',
            }}
        >
            <Container maxWidth="md">
                <AnimatedSection>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 3,
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '2.75rem' },
                            }}
                        >
                            お気軽にお問い合わせください
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 5,
                                opacity: 0.95,
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: 1.8,
                            }}
                        >
                            家電のことでもリフォームのことでも、
                            <br />
                            どんな些細なことでもお気軽にご相談ください。
                            <br />
                            専門スタッフが丁寧にお答えいたします。
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<PhoneIcon />}
                                component={Link}
                                href="/contact"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.125rem',
                                    fontWeight: 700,
                                    bgcolor: 'white',
                                    color: 'secondary.main',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.9)',
                                    },
                                }}
                            >
                                お問い合わせ
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
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
                    </Box>
                </AnimatedSection>
            </Container>
        </Box>
    );
}

