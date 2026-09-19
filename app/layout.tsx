import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './prototype.css';
import './iteration2.css';
import './welcome.css';
import './header.css';
import './map-iteration.css';
import './route-fix.css';
import './places.css';
import './logo-adjustment.css';
import './manual-routes.css';
import './tutorial-video.css';
import './device-frame.css';
import './sidewalk-routing.css';
import './text-to-speech.css';
import './account-access.css';
import './figma-alignment.css';
import './ux-refresh.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rodando X MZA',
  description: 'Movete por Mendoza de manera más accesible.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="device-frame">{children}</div>
      </body>
    </html>
  );
}
