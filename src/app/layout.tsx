import type { Metadata } from 'next';
import { AppShell, AppShellFooter, AppShellMain, ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
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
                    <AppShell
                        header={{ height: 60 }}
                    >
                        <Header />

                        <AppShellMain className='mt-[60px]'>
                            {children}
                        </AppShellMain>

                        <footer className='bg-slate-600 static w-screen'>Footer</footer>
                    </AppShell>
                </MantineProvider>
            </body>
        </html>
    );
}
