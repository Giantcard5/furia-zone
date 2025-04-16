import styled from 'styled-components';

const SponsorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: .5rem 0;
    margin-bottom: 2rem;
    opacity: 0.7;
    overflow-x: auto;
    
    @media (max-width: 768px) {
        gap: 1rem;
        justify-content: flex-start;
    }
`;

const SponsorLogo = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: white;
    white-space: nowrap;
    
    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`;

export {
    SponsorContainer,
    SponsorLogo
};