import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '해결의 책 | 당신의 고민을 위한 해답',
  description: '복잡한 고민이 있으신가요? 마음속으로 질문을 던지고 해결의 책을 펼쳐보세요. 즉각적인 조언과 영감을 드립니다.',
  keywords: ['해결의 책', '고민 상담', '타로', '운세', '조언', '선택 장애', '해결'],
  openGraph: {
    title: '해결의 책 | 당신의 고민을 위한 해답',
    description: '마음속으로 질문을 던지고 카드를 뒤집어보세요.',
    type: 'website',
  }
};

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="site-wrapper">
          <header className="site-header">
            <div className="header-content">
              <span className="logo-text">해결의 책</span>
              <nav>
                <a href="#book">책 펼치기</a>
                <a href="#about">소개</a>
                <a href="#faq">FAQ</a>
              </nav>
            </div>
          </header>
          {children}
          <footer className="site-footer">
            <div className="footer-content">
              <p>&copy; 2026 Solution Book. All rights reserved.</p>
              <div className="footer-links">
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">문의하기</a>
              </div>
            </div>
          </footer>
        </div>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
