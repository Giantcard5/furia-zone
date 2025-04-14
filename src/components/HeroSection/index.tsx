'use client'

import Link from 'next/link';

import { 
    ArrowRight 
} from 'lucide-react';

import * as S from './styles';

export function HeroSection() {
    const features = [
        {
            title: 'LIVE MATCH UPDATES',
            description: 'Follow all FURIA matches with real-time updates and statistics from PGL Major Copenhagen 2024.',
        },
        {
            title: 'FAN COMMUNITY',
            description: 'Chat with other FURIA fans during matches and share your thoughts on the teams performance.',
        },
        {
            title: 'TEAM INFORMATION',
            description: 'Access detailed profiles of all FURIA players and team statistics from past tournaments.',
        },
        {
            title: 'FAQ BOT',
            description: 'Get quick answers to your questions about FURIA and upcoming matches at the Major.',
        },
    ];

    return (
        <S.HeroContainer>
            <S.CrownIcon>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#D4AF37'>
                    <path d='M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z' />
                </svg>
            </S.CrownIcon>

            <S.HeroTitle>
                <span>FURIA</span> FAN PLATFORM
            </S.HeroTitle>

            <S.HeroSubtitle>
                Connect with other FURIA fans, follow live matches, and get the latest updates about your favorite CS:GO team.
            </S.HeroSubtitle>

            <Link href='/live-match' passHref>
                <S.CTAButton>
                    CHECK LIVE MATCH <ArrowRight size={18} />
                </S.CTAButton>
            </Link>

            <S.FeaturesGrid>
                {features.map((feature, index) => (
                    <S.FeatureCard key={index}>
                        <S.FeatureTitle>{feature.title}</S.FeatureTitle>
                        <S.FeatureDescription>{feature.description}</S.FeatureDescription>
                    </S.FeatureCard>
                ))}
            </S.FeaturesGrid>

            <S.TournamentInfo>
                <span>FURIA</span> | COPYRIGHT © 2025
            </S.TournamentInfo>
        </S.HeroContainer>
    );
};