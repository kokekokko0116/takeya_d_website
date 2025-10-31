'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import DevicesIcon from '@mui/icons-material/Devices';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnimatedSection from '@/components/common/AnimatedSection';

const features = [
    {
        icon: <DevicesIcon sx={{ fontSize: 48 }} />,
        title: '豊富な品揃え',
        description: '大手メーカーの全商品を取り扱い。最新家電から定番商品まで、お客様のニーズに合わせた商品をご提案します。',
    },
    {
        icon: <ConstructionIcon sx={{ fontSize: 48 }} />,
        title: 'リフォーム事業',
        description: 'キッチン、バス、トイレなどの水回りから内装・外装まで。住まいの快適性を高めるリフォームをトータルサポート。',
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
        title: '充実のアフターサービス',
        description: '専門の技術スタッフが迅速に対応。修理、メンテナンス、使い方のご相談まで、購入後も安心のサポート体制。',
    },
    {
        icon: <LocalShippingIcon sx={{ fontSize: 48 }} />,
        title: '配送・設置無料',
        description: '大型家電も安心。専門スタッフが丁寧に配送・設置を行います。不要な家電の引き取りサービスも実施中。',
    },
];

export default function FeaturesSection() {
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
                            タケヤデンキの強み
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                            }}
                        >
                            70年の歴史が培った、お客様第一のサービス
                        </Typography>
                    </Box>
                </AnimatedSection>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <AnimatedSection delay={index * 0.1} direction="up">
                                <Card
                                    sx={{
                                        height: '100%',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                color: 'primary.main',
                                                mb: 2,
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{ mb: 2, fontWeight: 600 }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

