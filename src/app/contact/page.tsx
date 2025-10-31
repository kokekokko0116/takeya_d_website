'use client';

import { Box, Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { COMPANY_INFO, STORES } from '@/lib/constants';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ここでフォーム送信処理を実装
        console.log('Form submitted:', formData);
        alert('お問い合わせを受け付けました。後ほど担当者よりご連絡いたします。');
    };

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
                                    お問い合わせ
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    お気軽にご相談ください
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* お問い合わせフォーム */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
                                    お問い合わせフォーム
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    下記フォームにご記入の上、送信してください。
                                    <br />
                                    担当者より折り返しご連絡いたします。
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <Card>
                                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12 }}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="お名前"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="メールアドレス"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    label="電話番号"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                            <Grid size={{ xs: 12 }}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="件名"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                            <Grid size={{ xs: 12 }}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="お問い合わせ内容"
                                                    name="message"
                                                    multiline
                                                    rows={6}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                            <Grid size={{ xs: 12 }}>
                                                <Box sx={{ textAlign: 'center', mt: 2 }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        size="large"
                                                        endIcon={<SendIcon />}
                                                        sx={{
                                                            px: 6,
                                                            py: 1.5,
                                                            fontSize: '1.125rem',
                                                        }}
                                                    >
                                                        送信する
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* 電話でのお問い合わせ */}
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
                                    お電話でのお問い合わせ
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    営業時間：10:00～19:00（定休日を除く）
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            {STORES.map((store, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={store.id}>
                                    <AnimatedSection delay={index * 0.1}>
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
                                            <CardContent sx={{ p: 3 }}>
                                                <LocationOnIcon
                                                    sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}
                                                />
                                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                                    {store.name}
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mb: 1,
                                                    }}
                                                >
                                                    <PhoneIcon sx={{ fontSize: 20, mr: 1, color: 'secondary.main' }} />
                                                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                                                        {store.phone}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {store.hours}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* よくある質問 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
                                    よくある質問
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Box>
                            {[
                                {
                                    q: '配送・設置は無料ですか？',
                                    a: 'はい、基本的に配送・設置は無料で行っております。ただし、一部地域や特殊な設置作業が必要な場合は別途料金が発生する場合がございます。',
                                },
                                {
                                    q: '古い家電の引き取りはしてもらえますか？',
                                    a: 'はい、新しい家電をご購入いただいた際に、同等の家電であれば無料で引き取りいたします。リサイクル料金が別途必要な場合がございます。',
                                },
                                {
                                    q: '保証期間はどのくらいですか？',
                                    a: 'メーカー保証に加え、当店独自の延長保証プランもご用意しております。商品によって異なりますので、詳しくは店頭スタッフにお尋ねください。',
                                },
                                {
                                    q: 'リフォームの見積もりは無料ですか？',
                                    a: 'はい、リフォームの見積もりは無料で行っております。お気軽にご相談ください。',
                                },
                                {
                                    q: '支払い方法は何がありますか？',
                                    a: '現金、各種クレジットカード、電子マネー、分割払い（ショッピングローン）をご利用いただけます。',
                                },
                            ].map((faq, index) => (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <Card sx={{ mb: 3 }}>
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    mb: 2,
                                                    fontWeight: 600,
                                                    color: 'primary.main',
                                                }}
                                            >
                                                Q. {faq.q}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'text.secondary',
                                                    lineHeight: 1.8,
                                                    pl: 2,
                                                }}
                                            >
                                                A. {faq.a}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimatedSection>
                            ))}
                        </Box>
                    </Container>
                </Box>
            </main>
            <Footer />
            <ScrollToTop />
        </Box>
    );
}

