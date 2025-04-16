import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #000000;
    color: white;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        z-index: 0;
        pointer-events: none;
    };
`

const MainContent = styled.main`
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    
    @media (min-width: 768px) {
        padding: 2rem;
    }
`;

export { LayoutContainer, MainContent };