import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna Rosa Academy - Risveglio Spirituale e Trasformazione",
  description: "Academy per donne dedicata alla crescita spirituale attraverso pratiche sciamaniche, arte terapia e la saggezza degli elementi",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#7e22ce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Glacial+Indifference:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Glacial Indifference', Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
