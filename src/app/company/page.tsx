import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import { COMPANY_INFO } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '会社概要 | タケヤ電機株式会社',
    description: 'タケヤ電機株式会社の会社概要、沿革をご紹介します。',
};

const history = [
    { year: '1953年', event: 'タケヤ電機商会として創業' },
    { year: '1965年', event: '法人化。タケヤ電機株式会社設立' },
    { year: '1975年', event: '屋島店（本店）開設' },
    { year: '1985年', event: 'リフォーム事業部開設' },
    { year: '1995年', event: '高松扇町店オープン' },
    { year: '2005年', event: 'さぬき志度店オープン' },
    { year: '2015年', event: 'さぬき三木店オープン' },
    { year: '2020年', event: 'オンライン販売開始' },
    { year: '2023年', event: '創業70周年' },
];

export default function CompanyPage() {
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
                                    会社概要
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    Company Profile
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* 会社概要 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <AnimatedSection>
                            <Box sx={{ mb: 8 }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mb: 6,
                                        fontWeight: 700,
                                        fontSize: { xs: '2rem', md: '2.75rem' },
                                        textAlign: 'center',
                                    }}
                                >
                                    会社情報
                                </Typography>
                                <TableContainer component={Paper} elevation={2}>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                        width: { xs: '30%', md: '20%' },
                                                    }}
                                                >
                                                    会社名
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    設立
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.founded}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    資本金
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.capital}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    代表取締役
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.ceo}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    従業員数
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.employees}名</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    本社所在地
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.address}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    TEL
                                                </TableCell>
                                                <TableCell>{COMPANY_INFO.phone}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    sx={{
                                                        fontWeight: 600,
                                                        bgcolor: 'background.default',
                                                    }}
                                                >
                                                    事業内容
                                                </TableCell>
                                                <TableCell>
                                                    {COMPANY_INFO.business.map((item, index) => (
                                                        <Box key={index} sx={{ mb: 0.5 }}>
                                                            • {item}
                                                        </Box>
                                                    ))}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* 沿革 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                    <Container maxWidth="md">
                        <AnimatedSection>
                            <Typography
                                variant="h2"
                                sx={{
                                    mb: 6,
                                    fontWeight: 700,
                                    fontSize: { xs: '2rem', md: '2.75rem' },
                                    textAlign: 'center',
                                }}
                            >
                                沿革
                            </Typography>
                        </AnimatedSection>

                        <Box sx={{ position: 'relative', pl: { xs: 2, md: 4 } }}>
                            {/* タイムライン */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: 0, md: 16 },
                                    top: 0,
                                    bottom: 0,
                                    width: 2,
                                    bgcolor: 'primary.main',
                                }}
                            />

                            {history.map((item, index) => (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <Box
                                        sx={{
                                            mb: 4,
                                            position: 'relative',
                                            pl: { xs: 3, md: 4 },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: { xs: -4, md: 8 },
                                                top: 8,
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                bgcolor: 'secondary.main',
                                                border: '3px solid white',
                                                boxShadow: 2,
                                            }}
                                        />
                                        <Paper
                                            elevation={2}
                                            sx={{
                                                p: 3,
                                                '&:hover': {
                                                    boxShadow: 4,
                                                    transform: 'translateX(8px)',
                                                    transition: 'all 0.3s ease',
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: 'primary.main',
                                                    mb: 1,
                                                }}
                                            >
                                                {item.year}
                                            </Typography>
                                            <Typography variant="body1">{item.event}</Typography>
                                        </Paper>
                                    </Box>
                                </AnimatedSection>
                            ))}
                        </Box>
                    </Container>
                </Box>

                {/* アクセス */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <AnimatedSection>
                            <Typography
                                variant="h2"
                                sx={{
                                    mb: 6,
                                    fontWeight: 700,
                                    fontSize: { xs: '2rem', md: '2.75rem' },
                                    textAlign: 'center',
                                }}
                            >
                                アクセス
                            </Typography>
                        </AnimatedSection>

                        <Grid container spacing={6} alignItems="center">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="left">
                                    <Box
                                        sx={{
                                            height: '400px',
                                            bgcolor: 'grey.200',
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                            Google Map
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Box>
                                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                            本社・屋島店
                                        </Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.secondary', mb: 0.5 }}
                                            >
                                                住所
                                            </Typography>
                                            <Typography variant="body1">{COMPANY_INFO.address}</Typography>
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.secondary', mb: 0.5 }}
                                            >
                                                電話番号
                                            </Typography>
                                            <Typography variant="body1">{COMPANY_INFO.phone}</Typography>
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.secondary', mb: 0.5 }}
                                            >
                                                営業時間
                                            </Typography>
                                            <Typography variant="body1">10:00～19:00</Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'text.secondary', mb: 0.5 }}
                                            >
                                                アクセス
                                            </Typography>
                                            <Typography variant="body1">
                                                • JR高松駅から車で約15分
                                                <br />
                                                • 高松琴平電鉄 琴電屋島駅から徒歩10分
                                                <br />• 駐車場完備（50台）
                                            </Typography>
                                        </Box>
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

