'use client';
import { AppShellHeader, AppShellNavbar, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react'

const Header = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShellHeader className="bg-slate-400 flex flex-row items-center justify-between p-4">
            <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom='sm'
                size="sm"
            />

            <div className="z-10 max-w-md font-mono">
                <Link href='/' className="text-4xl text-blue-600 text-center">Damage Calculator</Link>
            </div>

            <nav className='flex flex-row items-center justify-between gap-4'>
                <Link href='/user/600169846'>User: Speedy</Link>
                <Link href='/settings'>Settings</Link>
            </nav>

            <div className='flex flex-row items-center justify-between gap-4'>
                <h3>Settings</h3>
                <h3>Login</h3>
            </div>
        </AppShellHeader>
    )
}

export default Header;