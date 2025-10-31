'use client';

import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DevicesIcon from '@mui/icons-material/Devices';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';
import { SERVICES } from '@/lib/constants';
import { JSX } from 'react';

const iconMap: { [key: string]: JSX.Element } = {
    devices: <DevicesIcon sx={{ fontSize: 40 }} />,
    construction: <ConstructionIcon sx={{ fontSize: 40 }} />,
    support_agent: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    chat: <ChatIcon sx={{ fontSize: 40 }} />,
};

export default function ServicesSection() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
                            サービス
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                            }}
                        >
                            お客様の暮らしをトータルサポート
                        </Typography>
                    </Box>
                </AnimatedSection>

                <Grid container spacing={4}>
                    {SERVICES.map((service, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={service.id}>
                            <AnimatedSection delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 8,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            pt: '56.25%',
                                            bgcolor: 'grey.200',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                                                color: 'white',
                                            }}
                                        >
                                            {iconMap[service.icon]}
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ mb: 2, fontWeight: 600 }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}
                                        >
                                            {service.description}
                                        </Typography>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                                            {service.features.map((feature, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={feature}
                                                    size="small"
                                                    sx={{ mb: 1 }}
                                                />
                                            ))}
                                        </Stack>
                                        <Button
                                            variant="outlined"
                                            endIcon={<ArrowForwardIcon />}
                                            component={Link}
                                            href={service.link}
                                            fullWidth
                                        >
                                            詳しく見る
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
                            href="/services"
                            sx={{ px: 4, py: 1.5 }}
                        >
                            すべてのサービスを見る
                        </Button>
                    </Box>
                </AnimatedSection>
            </Container>
        </Box>
    );
}

