'use client'

import React, {
    useState,
    useEffect
} from 'react';

import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('../Sidebar').then(mod => mod.Sidebar), { ssr: false });

import * as S from './styles';

export function MainLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsSidebarOpen(false);
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <S.LayoutContainer>
            <Sidebar $isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <S.MainContent>
                {children}
            </S.MainContent>
        </S.LayoutContainer>
    );
};