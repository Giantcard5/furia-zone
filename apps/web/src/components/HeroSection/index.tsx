'use client';

import { 
    useEffect, 
    useState 
} from 'react';

import Link from 'next/link';

import { 
    ArrowRight 
} from 'lucide-react';

import * as S from './styles';

import { 
    Sponsor 
} from '../Sponsor';

export function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) return null;
    
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
            title: 'UPCOMING MATCHES',
            description: 'Stay updated with FURIA\'s upcoming matches, including dates, times, and opponents.',
        },
        {
            title: 'FAQ BOT',
            description: 'Get quick answers to your questions about FURIA and upcoming matches at the Major.',
        },
    ];

    return (
        <S.HeroContainer>
            <S.CrownIcon>
                <img src="/icon-gold.png" alt="" />
            </S.CrownIcon>

            <S.HeroTitle>
                <span>FURIA</span> FAN PLATFORM
            </S.HeroTitle>

            <S.HeroSubtitle>
                Connect with other FURIA fans, follow live matches, and get the latest updates about your favorite CS:GO team.
            </S.HeroSubtitle>

            <Link href="/live-match" passHref>
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

            <Sponsor />

            <S.TournamentInfo>
                FURIA <span>|</span> COPYRIGHT © 2025
            </S.TournamentInfo>
        </S.HeroContainer>
    );
};