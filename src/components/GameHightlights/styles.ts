import styled from 'styled-components';

const HighlightsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const HighlightCard = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: transform ${({ theme }) => theme.transitions.fast};
    border: 1px solid rgba(212, 175, 55, 0.1);
    
    &:hover {
        transform: translateY(-2px);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

const HighlightPreview = styled.div`
    position: relative;
    height: 200px;
    background-color: #111;
    cursor: pointer;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
        z-index: 1;
    }
`;

const PlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-color: rgba(212, 175, 55, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background-color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const HighlightInfo = styled.div`
    padding: 1rem;
`

const HighlightTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin: 0 0 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const HighlightMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.75rem;
    font-family: 'Space Mono', monospace;
`;

const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const HighlightTag = styled.span`
    background-color: rgba(212, 175, 55, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const VideoModal = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 1rem;
`;

const VideoContainer = styled.div`
    width: 100%;
    max-width: 800px;
    background-color: #000;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(212, 175, 55, 0.2);
`;

const VideoWrapper = styled.div`
    padding: 56.25% 0 0 0;
    position: relative;
`;

const VideoContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(212, 175, 55, 0.3);
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 101;
    
    &:hover {
        background: rgba(0, 0, 0, 0.8);
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

const PreviewImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
`;

// ... existing code ...
export {
    HighlightsContainer,
    HighlightCard,
    HighlightPreview,
    PlayButton,
    HighlightInfo,
    HighlightTitle,
    HighlightMeta,
    MetaItem,
    HighlightTag,
    VideoModal,
    VideoContainer,
    VideoWrapper,
    VideoContent,
    CloseButton,
    PreviewImage
};