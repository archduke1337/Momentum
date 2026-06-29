import type { Metadata } from 'next';
import { Geist, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { MainNav } from '@/components/layout/main-nav';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/layout/providers';
import { PageTransition } from '@/components/layout/page-transition';
import 'swiper/css';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://momentumrobotics.in'),
  title: {
    default: 'Momentum Robotics | Autonomous Mobile Robots & Industrial Automation',
    template: '%s | Momentum Robotics',
  },
  description:
    'Leading manufacturer of Autonomous Mobile Robots (AMRs), Automated Guided Vehicles (AGVs), and warehouse automation solutions in India.',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'apple-mobile-web-app-title': 'Momentum',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jakarta.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <MainNav />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
