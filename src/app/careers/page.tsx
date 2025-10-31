'use client';

import { Box, Container, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const jobs = [
    {
        title: '家電販売スタッフ',
        type: '正社員',
        location: '香川県内各店舗',
        description: 'お客様に最適な家電製品をご提案する販売スタッフを募集しています。未経験者歓迎。',
        requirements: ['高卒以上', '要普通免許', '接客経験者優遇'],
    },
    {
        title: 'リフォームアドバイザー',
        type: '正社員',
        location: '香川県内各店舗',
        description: 'お客様の住まいをより快適にするリフォームのご提案をしていただきます。',
        requirements: ['高卒以上', '要普通免許', '建築・インテリア関連知識あれば尚可'],
    },
    {
        title: '配送・設置スタッフ',
        type: '正社員',
        location: '香川県内各店舗',
        description: '家電製品の配送・設置を行うスタッフを募集しています。',
        requirements: ['高卒以上', '要普通免許', '力仕事に自信のある方'],
    },
    {
        title: '技術サービススタッフ',
        type: '正社員',
        location: '技術サービス部',
        description: '家電製品の修理・メンテナンスを行う技術スタッフを募集しています。',
        requirements: ['高卒以上', '要普通免許', '電気工事士資格優遇'],
    },
];

const benefits = [
    {
        title: '給与・賞与',
        items: ['月給20万円～35万円（経験・能力による）', '昇給年1回', '賞与年2回（実績による）'],
    },
    {
        title: '勤務時間',
        items: ['9:00～18:00（実働8時間）', '週休2日制（水曜定休＋1日）', '年間休日110日'],
    },
    {
        title: '福利厚生',
        items: ['各種社会保険完備', '退職金制度', '社員割引制度', '制服貸与', '交通費支給'],
    },
    {
        title: '教育制度',
        items: ['入社時研修', 'メーカー研修', '資格取得支援', 'キャリアアップ制度'],
    },
];

export default function CareersPage() {
    return (
        <Box>
            <Header />
            <main>
                {/* ヒーローセクション */}
                <Box
                    sx={{
                        position: 'relative',
                        minHeight: '60vh',
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
                                    採用情報
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 4,
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    一緒に働く仲間を募集しています
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        opacity: 0.9,
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        maxWidth: '600px',
                                        mx: 'auto',
                                        lineHeight: 1.8,
                                    }}
                                >
                                    お客様の笑顔のために、私たちと一緒に働きませんか？
                                    <br />
                                    未経験でも安心の研修制度、充実の福利厚生でお待ちしています。
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* タケヤデンキで働く魅力 */}
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
                                    タケヤデンキで働く魅力
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.1}>
                                    <Card sx={{ height: '100%', textAlign: 'center' }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
                                            >
                                                01
                                            </Typography>
                                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                                充実の研修制度
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                                未経験でも安心。入社時研修からメーカー研修、
                                                資格取得支援まで、成長をサポートします。
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.2}>
                                    <Card sx={{ height: '100%', textAlign: 'center' }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
                                            >
                                                02
                                            </Typography>
                                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                                働きやすい環境
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                                週休2日制、年間休日110日。
                                                ワークライフバランスを大切にした働き方ができます。
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.3}>
                                    <Card sx={{ height: '100%', textAlign: 'center' }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography
                                                variant="h4"
                                                sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
                                            >
                                                03
                                            </Typography>
                                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                                キャリアアップ
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                                頑張りが評価される環境。
                                                店長や管理職へのキャリアパスも明確です。
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* 募集職種 */}
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
                                    募集職種
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            {jobs.map((job, index) => (
                                <Grid size={{ xs: 12, md: 6 }} key={index}>
                                    <AnimatedSection delay={index * 0.1}>
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
                                                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                                    <Chip label={job.type} color="primary" size="small" />
                                                    <Chip label={job.location} size="small" variant="outlined" />
                                                </Stack>
                                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                                    {job.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                                                    {job.description}
                                                </Typography>
                                                <Box sx={{ mb: 2 }}>
                                                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                                        応募資格
                                                    </Typography>
                                                    {job.requirements.map((req, idx) => (
                                                        <Typography
                                                            key={idx}
                                                            variant="body2"
                                                            sx={{ color: 'text.secondary', mb: 0.5 }}
                                                        >
                                                            • {req}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* 福利厚生 */}
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
                                    給与・福利厚生
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            {benefits.map((benefit, index) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                    <AnimatedSection delay={index * 0.1}>
                                        <Card sx={{ height: '100%' }}>
                                            <CardContent sx={{ p: 4 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
                                                >
                                                    {benefit.title}
                                                </Typography>
                                                {benefit.items.map((item, idx) => (
                                                    <Typography
                                                        key={idx}
                                                        variant="body1"
                                                        sx={{ mb: 1, color: 'text.secondary' }}
                                                    >
                                                        • {item}
                                                    </Typography>
                                                ))}
                                            </CardContent>
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
                                    エントリーはこちら
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
                                    ご応募お待ちしています。
                                    <br />
                                    お気軽にお問い合わせください。
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
                                    エントリー・お問い合わせ
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

