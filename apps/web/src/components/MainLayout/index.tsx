'use client'

import React, {
    useState,
    useEffect
} from 'react';

import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('../Sidebar').then(mod => mod.Sidebar), { ssr: false });

import * as S from './styles';

export function MainLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <S.LayoutContainer>
            <Sidebar/>
            <S.MainContent>
                {children}
            </S.MainContent>
        </S.LayoutContainer>
    );
};