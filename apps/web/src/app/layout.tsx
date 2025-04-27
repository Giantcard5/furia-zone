import type { 
    Metadata 
} from 'next';

import {
    ThemeProvider 
} from '@/provider/ThemeProvider';
import { 
    AuthProvider 
} from '@/provider/AuthProvider';

export const metadata: Metadata = {
    title: "FURIA ZONE | CS:GO Fan Platform",
    description: "Connect with other FURIA fans and follow live matches"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/icon-black.png" />
            </head>
            <body>
                <ThemeProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};