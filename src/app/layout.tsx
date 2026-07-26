import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suzhou Huihai Sanitary Products Co., Ltd. | Direct Factory B2B Manufacturer',
  description: 'Leading B2B manufacturer of disposable electrostatic dusters, mop refill cloths, and microfiber cleaning towels. ISO 9001 & BSCI certified 15,000m² cleanroom facility in Suzhou, China.',
  keywords: [
    'Suzhou Huihai Sanitary Products',
    'Electrostatic duster manufacturer',
    'Mop refill cloth factory',
    'Microfiber cleaning cloth OEM',
    'China sanitary product supplier',
    'Disposable dusting sheets wholesale',
    'BSCI certified factory Suzhou'
  ],
  authors: [{ name: 'Suzhou Huihai Sanitary Products Co., Ltd.' }],
  openGraph: {
    title: 'Suzhou Huihai Sanitary Products Co., Ltd.',
    description: 'ISO 9001 & BSCI certified direct factory manufacturer for electrostatic dusters & microfiber cleaning consumables.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Suzhou Huihai Sanitary Products',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
