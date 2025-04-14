'use client'

import * as S from './styles';

export function Sponsor() {
    const sponsors = [
        "Adidas",
        "Cruzeiro do Sul",
        "Hellmann's",
        "POKERSTARS",
        "Lenovo LEGION",
        "RedBull",
    ];

    return (
        <S.SponsorContainer>
            {sponsors.map((sponsor, index) => (
                <S.SponsorLogo key={index}>{sponsor}</S.SponsorLogo>
            ))}
        </S.SponsorContainer>
    );
};