'use client';

import {
    useEffect,
    useState
} from 'react';

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
    HelpCircle,
    Calendar,
    User
} from 'lucide-react';

import * as S from './styles';

import {
    matchStatus
} from '@/lib/mock-data';
import { 
    useAuth 
} from '@/hooks/useAuth';
interface SidebarProps {
    $isOpen: boolean
    onClose: () => void
};

export function Sidebar({ $isOpen, onClose }: SidebarProps) {
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    const { user, isAuthenticated } = useAuth();

    const isLive = matchStatus.isLive;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const navItems = [
        { path: '/', label: 'HOME', icon: <Home size={18} /> },
        { path: '/live-match', label: 'LIVE MATCH', icon: <Trophy size={18} />, showLiveIndicator: isLive },
        { path: '/chat', label: 'FAN CHAT', icon: <MessageSquare size={18} /> },
        { path: '/team-info', label: 'TEAM INFO', icon: <Users size={18} /> },
        { path: '/upcoming-matches', label: 'UPCOMING MATCHES', icon: <Calendar size={18} /> },
        { path: '/faq-bot', label: 'FAQ BOT', icon: <HelpCircle size={18} /> },
    ];

    return (
        <>
            <S.SidebarContainer $isOpen={$isOpen}>
                <S.SidebarHeader>
                    <S.Logo src='/icon-gold.png' alt='FURIA' />
                    <S.Text>FURIA <span>ZONE</span></S.Text>
                    <S.CloseButton onClick={onClose} aria-label='Close sidebar'>
                        <X size={24} />
                    </S.CloseButton>
                </S.SidebarHeader>
                <S.NavList>
                    {navItems.map((item) => (
                        <Link href={item.path} passHref key={item.path} onClick={onClose}>
                            <div style={{ textDecoration: 'none', color: 'inherit' }}>
                                <S.NavItem $isActive={pathname === item.path}>
                                    <S.NavIcon>{item.icon}</S.NavIcon>
                                    <S.NavText>
                                        {item.label}
                                        {item.showLiveIndicator && <S.LiveIndicator />}
                                    </S.NavText>
                                </S.NavItem>
                            </div>
                        </Link>
                    ))}
                </S.NavList>
                <S.UserSection>
                    {isAuthenticated && user ? (
                        <S.UserInfo href="/profile">
                            <S.UserAvatar>
                                <User size={18} />
                            </S.UserAvatar>
                            <S.UserName>{user.username}</S.UserName>
                        </S.UserInfo>
                    ) : (
                        <S.LoginButton href="/auth/login">
                            <User size={16} />
                            LOG IN
                        </S.LoginButton>
                    )}
                </S.UserSection>
            </S.SidebarContainer>
            <S.Overlay $isOpen={$isOpen} onClick={onClose} />
        </>
    );
};