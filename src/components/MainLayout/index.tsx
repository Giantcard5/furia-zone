'use client'

import React, {
    useState,
    useEffect
} from 'react';

import { 
    Sidebar 
} from '../Sidebar';

import * as S from './styles';

export function MainLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        setIsSidebarOpen(false);
    }, []);

    return (
        <S.LayoutContainer>
            <Sidebar $isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <S.MainContent>
                {children}
            </S.MainContent>
        </S.LayoutContainer>
    );
};