import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Opera Epiclese',
    description: 'Furina Damage Calculator',
}

const theme = createTheme({

})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={theme}>
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
