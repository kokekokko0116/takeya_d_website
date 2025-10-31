'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';

const values = [
    {
        title: 'お客様第一',
        description: 'お客様の笑顔と「ありがとう」を何よりも大切にします。お客様の声に真摯に耳を傾け、期待を超えるサービスを提供します。',
    },
    {
        title: '誠実さ',
        description: '正直で誠実な対応を心がけ、お客様との信頼関係を築きます。約束は必ず守り、できないことは正直にお伝えします。',
    },
    {
        title: '挑戦',
        description: '現状に満足せず、常に新しいことに挑戦します。失敗を恐れず、そこから学び、成長し続けます。',
    },
    {
        title: 'チームワーク',
        description: '一人ひとりが尊重され、協力し合える職場環境を大切にします。チーム全体で目標達成を目指します。',
    },
    {
        title: '地域貢献',
        description: '地域社会の一員として、地域の発展に貢献します。地域の皆様との絆を大切にし、共に成長していきます。',
    },
];

export default function PhilosophyPage() {
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
                                    企業理念
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    私たちが大切にしていること
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* 経営理念 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
                    <Container maxWidth="md">
                        <AnimatedSection>
                            <Box sx={{ textAlign: 'center', mb: 6 }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mb: 4,
                                        fontWeight: 700,
                                        fontSize: { xs: '2rem', md: '2.75rem' },
                                    }}
                                >
                                    経営理念
                                </Typography>
                                <Box
                                    sx={{
                                        p: 6,
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        borderRadius: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 700,
                                            lineHeight: 1.6,
                                            fontSize: { xs: '1.5rem', md: '2rem' },
                                        }}
                                    >
                                        お客様の幸せな暮らしを
                                        <br />
                                        創造し続ける
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.125rem' },
                                            lineHeight: 1.8,
                                            opacity: 0.95,
                                        }}
                                    >
                                        私たちは、家電とリフォームを通じて、
                                        <br />
                                        お客様の毎日をより豊かで快適なものにし、
                                        <br />
                                        地域社会の発展に貢献します。
                                    </Typography>
                                </Box>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* ビジョン */}
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
                                    ビジョン
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                    }}
                                >
                                    目指す姿
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Card sx={{ height: '100%' }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography
                                                variant="h5"
                                                sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
                                            >
                                                2030年のタケヤデンキ
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ lineHeight: 1.8, color: 'text.secondary' }}
                                            >
                                                香川県で最も信頼される家電・リフォーム企業として、
                                                お客様の生活に欠かせないパートナーになる。
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Card sx={{ height: '100%' }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography
                                                variant="h5"
                                                sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
                                            >
                                                地域と共に成長
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ lineHeight: 1.8, color: 'text.secondary' }}
                                            >
                                                地域の皆様と共に歩み、共に成長し、
                                                次の世代にも選ばれ続ける企業を目指す。
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* 行動指針 */}
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
                                    行動指針
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                    }}
                                >
                                    私たちが大切にする5つの価値観
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            {values.map((value, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <AnimatedSection delay={index * 0.1} direction="up">
                                        <Card
                                            sx={{
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: 6,
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ p: 4 }}>
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        mb: 2,
                                                        color: 'secondary.main',
                                                        fontWeight: 700,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {String(index + 1).padStart(2, '0')}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        mb: 2,
                                                        fontWeight: 600,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {value.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        lineHeight: 1.8,
                                                    }}
                                                >
                                                    {value.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* 社会貢献 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                    <Container maxWidth="lg">
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
                                    社会貢献活動
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            地域イベントへの参加
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
                                        >
                                            地域のお祭りやイベントに積極的に参加・協賛し、
                                            地域コミュニティの活性化に貢献しています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            高齢者サポート
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
                                        >
                                            高齢者向けの家電相談会や使い方講座を定期的に開催。
                                            安心して家電を使っていただけるようサポートしています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            環境保護活動
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
                                        >
                                            省エネ家電の普及促進や、古い家電の適切なリサイクルを通じて、
                                            環境保護に取り組んでいます。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            次世代育成
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
                                        >
                                            地域の学生向けのインターンシップや職場体験を受け入れ、
                                            次世代の人材育成に貢献しています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
            <Footer />
            <ScrollToTop />
        </Box>
    );
}

