'use client';

import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import AnimatedSection from '@/components/common/AnimatedSection';
import CountUp from '@/components/common/CountUp';
import { ACHIEVEMENTS } from '@/lib/constants';

export default function AchievementsSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                color: 'white',
            }}
        >
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
                            信頼の実績
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                opacity: 0.95,
                                fontSize: { xs: '1rem', md: '1.125rem' },
                            }}
                        >
                            数字で見るタケヤデンキ
                        </Typography>
                    </Box>
                </AnimatedSection>

                <Grid container spacing={4}>
                    {ACHIEVEMENTS.map((achievement, index) => (
                        <Grid size={{ xs: 6, md: 3 }} key={index}>
                            <AnimatedSection delay={index * 0.15} direction="up">
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 800,
                                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                                            color: 'secondary.main',
                                        }}
                                    >
                                        <CountUp
                                            end={parseInt(achievement.value)}
                                            suffix={achievement.suffix}
                                            duration={2.5}
                                        />
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 500,
                                            opacity: 0.95,
                                            fontSize: { xs: '1rem', md: '1.25rem' },
                                        }}
                                    >
                                        {achievement.label}
                                    </Typography>
                                </Box>
                            </AnimatedSection>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

