'use client'

import {
    usePathname
} from 'next/navigation';

import Link from 'next/link';

import {
    X,
    Home,
    MessageSquare,
    Trophy,
    Users,
    HelpCircle
} from 'lucide-react';

import * as S from './styles';

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    const navItems = [
        { path: '/', label: 'HOME', icon: <Home size={18} /> },
        { path: '/live-match', label: 'LIVE MATCH', icon: <Trophy size={18} /> },
        { path: '/chat', label: 'FAN CHAT', icon: <MessageSquare size={18} /> },
        { path: '/team-info', label: 'TEAM INFO', icon: <Users size={18} /> },
        { path: '/faq-bot', label: 'FAQ BOT', icon: <HelpCircle size={18} /> },
    ];

    return (
        <>
            <S.SidebarContainer isOpen={isOpen}>
                <S.SidebarHeader>
                    <S.Logo>FURIA</S.Logo>
                    <S.CloseButton onClick={onClose} aria-label='Close sidebar'>
                        <X size={24} />
                    </S.CloseButton>
                </S.SidebarHeader>
                <S.NavList>
                    {navItems.map((item) => (
                        <Link href={item.path} key={item.path} onClick={onClose}>
                            <S.NavItem isActive={pathname === item.path}>
                                <S.NavIcon>{item.icon}</S.NavIcon>
                                <S.NavText>{item.label}</S.NavText>
                            </S.NavItem>
                        </Link>
                    ))}
                </S.NavList>
                <S.SidebarFooter>
                    <S.GoldText>FURIA</S.GoldText> | COPYRIGHT © 2025
                </S.SidebarFooter>
            </S.SidebarContainer>
            <S.Overlay isOpen={isOpen} onClick={onClose} />
        </>
    );
};