import { Box, Container, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DevicesIcon from '@mui/icons-material/Devices';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'サービス一覧 | タケヤ電機株式会社',
    description: 'タケヤ電機のサービス一覧。家電販売、リフォーム、アフターサービス、技術サポートをご紹介します。',
};

const iconMap: { [key: string]: JSX.Element } = {
    devices: <DevicesIcon sx={{ fontSize: 60 }} />,
    construction: <ConstructionIcon sx={{ fontSize: 60 }} />,
    support_agent: <SupportAgentIcon sx={{ fontSize: 60 }} />,
    chat: <ChatIcon sx={{ fontSize: 60 }} />,
};

export default function ServicesPage() {
    return (
        <Box>
            <Header />
            <main>
                {/* ヒーローセクション */}
                <Box
                    sx={{
                        position: 'relative',
                        minHeight: '50vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                        color: 'white',
                    }}
                >
                    <Container maxWidth="lg">
                        <AnimatedSection>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        mb: 3,
                                        fontWeight: 800,
                                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    }}
                                >
                                    サービス
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    お客様の暮らしをトータルサポート
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* サービス一覧 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6}>
                            {SERVICES.map((service, index) => (
                                <Grid size={{ xs: 12 }} key={service.id}>
                                    <AnimatedSection delay={index * 0.1}>
                                        <Card
                                            sx={{
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: 8,
                                                },
                                            }}
                                        >
                                            <Grid container>
                                                <Grid size={{ xs: 12, md: 4 }}>
                                                    <Box
                                                        sx={{
                                                            height: { xs: '250px', md: '100%' },
                                                            minHeight: { md: '350px' },
                                                            background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        {iconMap[service.icon]}
                                                    </Box>
                                                </Grid>
                                                <Grid size={{ xs: 12, md: 8 }}>
                                                    <CardContent sx={{ p: { xs: 3, md: 5 }, height: '100%' }}>
                                                        <Typography
                                                            variant="h4"
                                                            sx={{ mb: 3, fontWeight: 700 }}
                                                        >
                                                            {service.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                mb: 3,
                                                                color: 'text.secondary',
                                                                lineHeight: 1.8,
                                                                fontSize: '1.125rem',
                                                            }}
                                                        >
                                                            {service.description}
                                                        </Typography>
                                                        <Box sx={{ mb: 3 }}>
                                                            <Typography
                                                                variant="subtitle1"
                                                                sx={{ mb: 2, fontWeight: 600 }}
                                                            >
                                                                主なサービス内容
                                                            </Typography>
                                                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                                                {service.features.map((feature, idx) => (
                                                                    <Chip
                                                                        key={idx}
                                                                        label={feature}
                                                                        color="primary"
                                                                        variant="outlined"
                                                                        sx={{ mb: 1 }}
                                                                    />
                                                                ))}
                                                            </Stack>
                                                        </Box>
                                                        <Button
                                                            variant="contained"
                                                            endIcon={<ArrowForwardIcon />}
                                                            component={Link}
                                                            href="/contact"
                                                            size="large"
                                                        >
                                                            お問い合わせ
                                                        </Button>
                                                    </CardContent>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* CTA */}
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
                                    variant="h3"
                                    sx={{
                                        mb: 3,
                                        fontWeight: 700,
                                        fontSize: { xs: '2rem', md: '2.75rem' },
                                    }}
                                >
                                    お気軽にご相談ください
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
                                </Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowForwardIcon />}
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
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>
            </main>
            <Footer />
            <ScrollToTop />
        </Box>
    );
}

