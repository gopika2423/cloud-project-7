import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CloudVault Zero - Secure File Transfer',
  description: 'Zero-retention secure cloud file exchange platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {children}
        </div>
      </body>
    </html>
  );
}
