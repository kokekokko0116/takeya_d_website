import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import AnimatedSection from '@/components/common/AnimatedSection';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '経営戦略 | タケヤ電機株式会社',
    description: 'タケヤ電機の事業戦略、将来展望、成長計画をご紹介します。',
};

const strategies = [
    {
        icon: <StorefrontIcon sx={{ fontSize: 48 }} />,
        title: '店舗展開の強化',
        description: '既存店舗のリニューアルと、新規出店の検討を進めています。お客様により良い買い物体験を提供できる店舗づくりを目指します。',
    },
    {
        icon: <LightbulbIcon sx={{ fontSize: 48 }} />,
        title: 'デジタル化の推進',
        description: 'オンライン販売の強化、デジタル接客の導入など、時代に合わせたサービスを展開。リアルとデジタルの融合を図ります。',
    },
    {
        icon: <GroupsIcon sx={{ fontSize: 48 }} />,
        title: '人材育成',
        description: '社員一人ひとりの成長を支援し、専門知識とサービス力を高めます。次世代を担うリーダーの育成にも注力します。',
    },
    {
        icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
        title: '事業領域の拡大',
        description: 'リフォーム事業のさらなる拡充、新サービスの開発など、お客様のニーズに応える事業展開を進めます。',
    },
];

export default function StrategyPage() {
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
                                    経営戦略
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        opacity: 0.95,
                                        fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    }}
                                >
                                    未来に向けた成長戦略
                                </Typography>
                            </Box>
                        </AnimatedSection>
                    </Container>
                </Box>

                {/* 中期経営計画 */}
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
                                    中期経営計画（2024-2027）
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                    }}
                                >
                                    持続的な成長を実現するための3ヵ年計画
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.1}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            textAlign: 'center',
                                            bgcolor: 'background.default',
                                            borderRadius: 2,
                                            height: '100%',
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{ mb: 1, fontWeight: 800, color: 'primary.main' }}
                                        >
                                            150%
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                            売上高目標
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            2024年比
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.2}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            textAlign: 'center',
                                            bgcolor: 'background.default',
                                            borderRadius: 2,
                                            height: '100%',
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{ mb: 1, fontWeight: 800, color: 'primary.main' }}
                                        >
                                            6店舗
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                            店舗展開
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            2027年までに
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                                <AnimatedSection delay={0.3}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            textAlign: 'center',
                                            bgcolor: 'background.default',
                                            borderRadius: 2,
                                            height: '100%',
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{ mb: 1, fontWeight: 800, color: 'primary.main' }}
                                        >
                                            200名
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                            従業員数
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            2027年までに
                                        </Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* 4つの戦略 */}
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
                                    4つの重点戦略
                                </Typography>
                            </Box>
                        </AnimatedSection>

                        <Grid container spacing={4}>
                            {strategies.map((strategy, index) => (
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
                                                <Box
                                                    sx={{
                                                        color: 'primary.main',
                                                        mb: 2,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {strategy.icon}
                                                </Box>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        mb: 2,
                                                        fontWeight: 600,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {strategy.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        lineHeight: 1.8,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {strategy.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </AnimatedSection>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* 地域との関わり */}
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
                                    地域との関わり
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                    }}
                                >
                                    地域と共に成長する企業を目指して
                                </Typography>
                            </Box>
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
                                            background: 'linear-gradient(135deg, #0066CC 0%, #004A99 100%)',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography variant="h4">地域との連携</Typography>
                                    </Box>
                                </AnimatedSection>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AnimatedSection direction="right">
                                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                                        香川県との協力
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
                                    >
                                        地元香川県の企業として、地域経済の活性化に貢献することを使命としています。
                                        県内の企業や自治体との連携を深め、地域全体の発展に寄与します。
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}
                                    >
                                        また、地域の雇用創出にも積極的に取り組み、
                                        若者が地元で活躍できる環境づくりを推進しています。
                                    </Typography>
                                </AnimatedSection>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* 将来展望 */}
                <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
                    <Container maxWidth="md">
                        <AnimatedSection>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        mb: 4,
                                        fontWeight: 700,
                                        fontSize: { xs: '2rem', md: '2.75rem' },
                                    }}
                                >
                                    将来展望
                                </Typography>
                                <Box
                                    sx={{
                                        p: { xs: 4, md: 6 },
                                        bgcolor: 'secondary.main',
                                        color: 'white',
                                        borderRadius: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 700,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        100年企業を目指して
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.125rem' },
                                            lineHeight: 1.8,
                                            opacity: 0.95,
                                        }}
                                    >
                                        創業70周年を迎えた今、次の目標は100年企業です。
                                        時代が変わっても、変わらぬ「お客様第一」の精神を守りながら、
                                        新しい技術やサービスを取り入れ、進化し続けます。
                                        <br />
                                        <br />
                                        次の世代、そしてその次の世代にも、
                                        「タケヤデンキがあって良かった」と言っていただける企業であり続けます。
                                    </Typography>
                                </Box>
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

