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
    Home,
    MessageSquare,
    Trophy,
    Users,
    HelpCircle,
    Calendar,
    User,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

import * as S from './styles';

import {
    matchStatus
} from '@/lib/mock-data';
import {
    useAuth
} from '@/hooks/useAuth';

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const pathname = usePathname();
    const { user, isAuthenticated } = useAuth();

    const isLive = matchStatus.isLive;

    useEffect(() => {
        setIsMounted(true);

        const handleResize = () => {
            if (window.innerWidth <= 768 && !isCollapsed) {
                setIsCollapsed(true);
            };
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isCollapsed]);

    if (!isMounted) return null;

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    };

    const navItems = [
        { path: '/', label: 'HOME', icon: <Home size={18} /> },
        { path: '/live-match', label: 'LIVE MATCH', icon: <Trophy size={18} />, showLiveIndicator: isLive },
        { path: '/chat', label: 'FAN CHAT', icon: <MessageSquare size={18} /> },
        { path: '/team-info', label: 'TEAM INFO', icon: <Users size={18} /> },
        { path: '/upcoming-matches', label: 'UPCOMING MATCHES', icon: <Calendar size={18} /> },
        { path: '/faq-bot', label: 'FAQ BOT', icon: <HelpCircle size={18} /> },
    ];

    return (
        <S.SidebarContainer $isCollapsed={isCollapsed}>
            <S.SidebarHeader>
                <S.Logo src='/icon-gold.png' alt='FURIA' $isCollapsed={isCollapsed} />
                {!isCollapsed && (
                    <S.Text>FURIA <span>ZONE</span></S.Text>
                )}
            </S.SidebarHeader>

            <S.CollapseButton onClick={toggleCollapse} aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
                {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </S.CollapseButton>

            <S.NavList>
                {navItems.map((item) => (
                    <Link href={item.path} key={item.path}>
                        <S.NavItem $isActive={pathname === item.path} $isCollapsed={isCollapsed}>
                            <S.NavIcon $isCollapsed={isCollapsed}>{item.icon}</S.NavIcon>
                            <S.NavText $isCollapsed={isCollapsed}>
                                {item.label}
                                {item.showLiveIndicator && <S.LiveIndicator />}
                            </S.NavText>
                        </S.NavItem>
                    </Link>
                ))}
            </S.NavList>

            <S.UserSection $isCollapsed={isCollapsed}>
                {isAuthenticated && user ? (
                    <S.UserInfo href='/profile'>
                        <S.UserAvatar>
                            <User size={18} />
                        </S.UserAvatar>
                        {!isCollapsed && <S.UserName>{user.username}</S.UserName>}
                    </S.UserInfo>
                ) : (
                    <S.LoginButton href='/auth/login' $isCollapsed={isCollapsed}>
                        <User size={16} />
                        {!isCollapsed && 'LOG IN'}
                    </S.LoginButton>
                )}
            </S.UserSection>
        </S.SidebarContainer>
    )
};