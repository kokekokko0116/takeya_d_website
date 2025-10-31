'use client';

import { Box, Container, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsIcon from '@mui/icons-material/Directions';
import { STORES } from '@/lib/constants';

export default function StoresPage() {
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
                                    店舗情報
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    香川県内4店舗でお待ちしています
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* 店舗一覧 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6}>
                            {STORES.map((store, index) => (
                                <Grid size={{ xs: 12 }} key={store.id}>
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
                                                <Grid size={{ xs: 12, md: 5 }}>
                                                    <Box
                                                        sx={{
                                                            height: { xs: '300px', md: '100%' },
                                                            minHeight: { md: '400px' },
                                                            background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white',
                                                            p: 3,
                                                        }}
                                                    >
                                                        <LocationOnIcon sx={{ fontSize: 80, mb: 2 }} />
                                                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                                            {store.name}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid size={{ xs: 12, md: 7 }}>
                                                    <CardContent sx={{ p: { xs: 3, md: 5 }, height: '100%' }}>
                                                        <Box sx={{ mb: 3 }}>
                                                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                                                                {store.features.map((feature, idx) => (
                                                                    <Chip
                                                                        key={idx}
                                                                        label={feature}
                                                                        color="secondary"
                                                                        sx={{ mb: 1 }}
                                                                    />
                                                                ))}
                                                            </Stack>
                                                        </Box>

                                                        <Box sx={{ mb: 3 }}>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'flex-start',
                                                                    mb: 2,
                                                                }}
                                                            >
                                                                <LocationOnIcon
                                                                    sx={{ mr: 2, mt: 0.5, color: 'text.secondary' }}
                                                                />
                                                                <Box>
                                                                    <Typography
                                                                        variant="subtitle2"
                                                                        sx={{ color: 'text.secondary', mb: 0.5 }}
                                                                    >
                                                                        住所
                                                                    </Typography>
                                                                    <Typography variant="body1">{store.address}</Typography>
                                                                </Box>
                                                            </Box>

                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'flex-start',
                                                                    mb: 2,
                                                                }}
                                                            >
                                                                <PhoneIcon
                                                                    sx={{ mr: 2, mt: 0.5, color: 'text.secondary' }}
                                                                />
                                                                <Box>
                                                                    <Typography
                                                                        variant="subtitle2"
                                                                        sx={{ color: 'text.secondary', mb: 0.5 }}
                                                                    >
                                                                        電話番号
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="h6"
                                                                        sx={{ fontWeight: 700, color: 'secondary.main' }}
                                                                    >
                                                                        {store.phone}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>

                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'flex-start',
                                                                    mb: 2,
                                                                }}
                                                            >
                                                                <AccessTimeIcon
                                                                    sx={{ mr: 2, mt: 0.5, color: 'text.secondary' }}
                                                                />
                                                                <Box>
                                                                    <Typography
                                                                        variant="subtitle2"
                                                                        sx={{ color: 'text.secondary', mb: 0.5 }}
                                                                    >
                                                                        営業時間
                                                                    </Typography>
                                                                    <Typography variant="body1">{store.hours}</Typography>
                                                                    <Typography
                                                                        variant="body2"
                                                                        sx={{ color: 'text.secondary', mt: 0.5 }}
                                                                    >
                                                                        定休日：水曜日
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Button
                                                            variant="contained"
                                                            startIcon={<DirectionsIcon />}
                                                            size="large"
                                                            sx={{ mt: 2 }}
                                                        >
                                                            アクセス情報を見る
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

                {/* 営業時間・定休日 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                    <Container maxWidth="md">
                        <AnimatedSection>
                            <Box sx={{ textAlign: 'center', mb: 6 }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 700,
                                        fontSize: { xs: '2rem', md: '2.75rem' },
                                    }}
                                >
                                    営業時間・定休日
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Card>
                                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                            <AccessTimeIcon
                                                sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}
                                            />
                                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                                営業時間
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}
                                            >
                                                10:00～19:00
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                全店舗共通
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Card>
                                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: '50%',
                                                    bgcolor: 'secondary.main',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mx: 'auto',
                                                    mb: 2,
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{ color: 'white', fontWeight: 700 }}
                                                >
                                                    水
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                                定休日
                                            </Typography>
                                            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                                                毎週水曜日
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                ※一部店舗を除く
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* お問い合わせCTA */}
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
                                    ご来店お待ちしています
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
                                    ご不明な点がございましたら、
                                    <br />
                                    お気軽にお電話またはお問い合わせフォームよりご連絡ください。
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
                                        お電話で問い合わせ
                                    </Button>
                                </Stack>
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

