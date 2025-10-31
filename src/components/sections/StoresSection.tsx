'use client';

import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';
import { STORES } from '@/lib/constants';

export default function StoresSection() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <AnimatedSection>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '2.75rem' },
                            }}
                        >
                            店舗情報
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                            }}
                        >
                            香川県内4店舗でお待ちしています
                        </Typography>
                    </Box>
                </AnimatedSection>

                <Grid container spacing={4}>
                    {STORES.map((store, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={store.id}>
                            <AnimatedSection delay={index * 0.1} direction="up">
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            pt: '75%',
                                            background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'white',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <LocationOnIcon sx={{ fontSize: 48, mb: 1 }} />
                                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                                {store.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                                <LocationOnIcon sx={{ mr: 1, fontSize: 20, mt: 0.3, color: 'text.secondary' }} />
                                                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                                    {store.address}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <PhoneIcon sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {store.phone}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <AccessTimeIcon sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {store.hours}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                                            {store.features.slice(0, 2).map((feature, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={feature}
                                                    size="small"
                                                    color="primary"
                                                    variant="outlined"
                                                    sx={{ mb: 1 }}
                                                />
                                            ))}
                                        </Stack>
                                        <Button
                                            variant="text"
                                            endIcon={<ArrowForwardIcon />}
                                            component={Link}
                                            href={`/stores/${store.id}`}
                                            fullWidth
                                            sx={{ mt: 'auto' }}
                                        >
                                            詳細を見る
                                        </Button>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </Grid>
                    ))}
                </Grid>

                <AnimatedSection delay={0.4}>
                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            component={Link}
                            href="/stores"
                            sx={{ px: 4, py: 1.5 }}
                        >
                            店舗一覧を見る
                        </Button>
                    </Box>
                </AnimatedSection>
            </Container>
        </Box>
    );
}

