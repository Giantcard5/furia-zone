'use client';

import { 
    useRouter 
} from 'next/navigation';

import Image from 'next/image';

import { 
    LogOut, 
    User, 
    Calendar, 
    Shield 
} from 'lucide-react';

import { 
    useAuth 
} from '@/hooks/useAuth';

import * as S from './styles';

import { 
    theme 
} from '@/styles/theme';

export function UserProfile() {
    const { user, logout, isAuthenticated } = useAuth();

    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    if (!isAuthenticated) {
        return (
            <S.NotLoggedIn>
                <S.NotLoggedInTitle>NOT LOGGED IN</S.NotLoggedInTitle>
                <S.NotLoggedInText>You need to log in to view your profile</S.NotLoggedInText>
                <S.LoginButton href='/auth/login'>
                    <User size={18} />
                    LOG IN
                </S.LoginButton>
            </S.NotLoggedIn>
        );
    };

    return (
        <S.ProfileContainer>
            <S.ProfileHeader>
                <S.AvatarContainer>
                    <Image
                        src={user?.avatar || '/placeholder.svg?height=120&width=120'}
                        alt={user?.username || 'User'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </S.AvatarContainer>

                <S.ProfileInfo>
                    <S.Username>{user?.username}</S.Username>
                    <S.Name>{user?.name}</S.Name>

                    {user?.isModerator && (
                        <S.ModeratorBadge>
                            <Shield size={14} />
                            MODERATOR
                        </S.ModeratorBadge>
                    )}

                    <S.ProfileMeta>
                        <S.MetaItem>
                            <User size={14} />
                            {user?.email}
                        </S.MetaItem>
                        <S.MetaItem>
                            <Calendar size={14} />
                            Member since {user?.createdAt.toLocaleDateString()}
                        </S.MetaItem>
                    </S.ProfileMeta>

                    <S.LogoutButton onClick={handleLogout}>
                        <LogOut size={18} />
                        LOG OUT
                    </S.LogoutButton>
                </S.ProfileInfo>
            </S.ProfileHeader>

            <S.ProfileSection>
                <S.SectionTitle>ACCOUNT SETTINGS</S.SectionTitle>
                <p style={{ color: theme.colors.text.secondary }}>Account settings functionality will be available soon.</p>
            </S.ProfileSection>

            <S.ProfileSection>
                <S.SectionTitle>ACTIVITY</S.SectionTitle>
                <p style={{ color: theme.colors.text.secondary }}>Your recent activity will be displayed here.</p>
            </S.ProfileSection>
        </S.ProfileContainer>
    );
};