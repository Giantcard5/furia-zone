import styled from 'styled-components';

const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    min-height: 80vh;
    position: relative;
    
    @media (min-width: 768px) {
        padding: 4rem 2rem;
    }
`;

const HeroTitle = styled.h1`
    font-family: 'Space Mono', monospace;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: white;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    
    @media (min-width: 768px) {
        font-size: 4rem;
    }
    
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    max-width: 600px;
    margin: 0 auto 2rem;
    letter-spacing: 0.05em;
    
    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;

const CTAButton = styled.a`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.75rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.fast};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    
    &:hover {
        background-color: rgba(212, 175, 55, 0.1);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
    
    svg {
        margin-left: 0.5rem;
    }
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 4rem 0;
    width: 100%;
    max-width: 1200px;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

const FeatureCard = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(212, 175, 55, 0.1);
    padding: 1.5rem;
    transition: transform ${({ theme }) => theme.transitions.normal};
    position: relative;
    overflow: hidden;
    
    &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const FeatureTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const FeatureDescription = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
`;

const TournamentInfo = styled.div`
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    letter-spacing: 0.1em;
    
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const CrownIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    margin: 0 auto 1rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export {
    HeroContainer,
    HeroTitle,
    HeroSubtitle,
    CTAButton,
    FeaturesGrid,
    FeatureCard,
    FeatureTitle,
    FeatureDescription,
    TournamentInfo,
    CrownIcon,
};