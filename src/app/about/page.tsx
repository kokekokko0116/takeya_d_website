import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'これがタケヤデンキ | タケヤ電機株式会社',
    description: '香川県で70年。地域に根ざした家電販売とリフォーム事業を展開するタケヤ電機の会社案内です。',
};

export default function AboutPage() {
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
                                    これがタケヤデンキ
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                        maxWidth: '800px',
                                        mx: 'auto',
                                    }}
                                >
                                    お客様の「うれしい」「ありがとう」が
                                    <br />
                                    私たちの原動力です
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* タケヤデンキについて */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <AnimatedSection>
                            <Grid container spacing={6} alignItems="center">
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box
                                        sx={{
                                            height: '400px',
                                            bgcolor: 'grey.200',
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography variant="h4">店舗外観</Typography>
                                    </Box>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Typography
                                        variant="h3"
                                        sx={{ mb: 3, fontWeight: 700, textAlign: { xs: 'center', md: 'left' } }}
                                    >
                                        地域に根ざした
                                        <br />
                                        電気屋さん
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}
                                    >
                                        タケヤ電機は1953年の創業以来、香川県を中心に家電販売とリフォーム事業を展開してきました。
                                        地域の皆様に愛され、信頼されるお店として、70年の歴史を刻んできました。
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 3, lineHeight: 1.8, color: 'text.secondary' }}
                                    >
                                        「運命の１台 届けます」をモットーに、お客様一人ひとりのライフスタイルに合わせた商品選びをサポート。
                                        家電だけでなく、リフォームを通じて、より快適な暮らしをご提案しています。
                                    </Typography>
                                </Grid>
                            </Grid>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* タケヤデンキの特徴 */}
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
                                    タケヤデンキの3つの特徴
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.1}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            bgcolor: 'background.paper',
                                            borderRadius: 2,
                                            height: '100%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
                                        >
                                            01
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            家電とリフォーム
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                            家電販売とリフォーム事業の両方を展開。
                                            キッチンのリフォームに合わせて最適な冷蔵庫やコンロをご提案するなど、
                                            トータルでのライフスタイル改善をサポートします。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.2}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            bgcolor: 'background.paper',
                                            borderRadius: 2,
                                            height: '100%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
                                        >
                                            02
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            地域密着型サービス
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                            香川県内4店舗で地域の皆様に寄り添ったサービスを提供。
                                            顔の見える関係だからこそできる、きめ細やかな対応と
                                            アフターサービスが自慢です。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.3}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            bgcolor: 'background.paper',
                                            borderRadius: 2,
                                            height: '100%',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
                                        >
                                            03
                                        </Typography>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            70年の信頼と実績
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                            1953年の創業から70年。三世代にわたってご愛顧いただいているお客様も多く、
                                            長年の経験と実績に基づいた確かな技術とサービスを提供しています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* タケヤデンキの挑戦 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
                                    タケヤデンキの挑戦
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.125rem' }}>
                                    時代の変化に対応し、常に進化し続ける
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            デジタル化への対応
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                                            オンライン相談やLINEでのサポートなど、デジタルツールを活用したサービスを展開。
                                            お客様の利便性を高めながら、人と人とのつながりも大切にしています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            環境への配慮
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                                            省エネ家電の提案や太陽光発電システムの導入サポートなど、
                                            環境に配慮した商品・サービスの提供に力を入れています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            若い世代への継承
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                                            次世代を担う若手スタッフの育成に注力。
                                            伝統を守りながらも新しい発想を取り入れ、時代に合ったサービスを提供しています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Box sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            地域貢献活動
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
                                            地域のイベントへの協賛や高齢者向けの無料相談会の開催など、
                                            地域社会への貢献活動を積極的に行っています。
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>
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
                                    もっとタケヤデンキを知る
                                </Typography>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            component={Link}
                                            href="/philosophy"
                                            sx={{
                                                bgcolor: 'white',
                                                color: 'secondary.main',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.9)',
                                                },
                                            }}
                                        >
                                            企業理念
                                        </Button>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            component={Link}
                                            href="/strategy"
                                            sx={{
                                                bgcolor: 'white',
                                                color: 'secondary.main',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.9)',
                                                },
                                            }}
                                        >
                                            経営戦略
                                        </Button>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            component={Link}
                                            href="/company"
                                            sx={{
                                                bgcolor: 'white',
                                                color: 'secondary.main',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255,255,255,0.9)',
                                                },
                                            }}
                                        >
                                            会社概要
                                        </Button>
                                    </Grid>
                                </Grid>
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

