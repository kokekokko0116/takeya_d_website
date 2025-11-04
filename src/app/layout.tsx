import type { Metadata } from "next";
import ThemeRegistry from '@/components/ThemeRegistry';
import "./globals.css";

export const metadata: Metadata = {
  title: "タケヤ電機株式会社 | 運命の１台 届けます",
  description: "創業70周年。香川県で愛される地域密着型の家電販売・リフォーム事業を展開。家電+リフォーム＝２倍の幸せをお届けします。",
  keywords: "タケヤ電機,家電,リフォーム,香川県,高松市,屋島,扇町,志度,三木",
  verification: {
    google: "D-OuhhbGHZd3mzXG7RIiT3HxdsIICdvAStyMHrcmq6c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
