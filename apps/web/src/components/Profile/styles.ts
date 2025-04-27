import styled from 'styled-components';

const ProfileContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        gap: 2rem;
    }
`;

const AvatarContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Username = styled.h1`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h2`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    margin-bottom: 1rem;
    font-family: 'Space Mono', monospace;
`;

const ProfileMeta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
`

const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'Space Mono', monospace;
`;

const ModeratorBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba(212, 175, 55, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
`;

const ProfileSection = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    padding: 1.5rem;
    margin-bottom: 2rem;
`;

const LogoutButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: 1px solid #F44336;
    color: #F44336;
    padding: 0.75rem 1.5rem;
    font-family: 'Space Mono', monospace;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background-color: rgba(244, 67, 54, 0.1);
    }
`;

const NotLoggedIn = styled.div`
    text-align: center;
    padding: 3rem 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const NotLoggedInTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 1rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
`;

const NotLoggedInText = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1.5rem;
`;

const LoginButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
    padding: 0.75rem 1.5rem;
    font-family: 'Space Mono', monospace;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background-color: #E5C158;
    }
`;

export {
    ProfileContainer,
    ProfileHeader,
    AvatarContainer,
    ProfileInfo,
    Username,
    Name,
    ProfileMeta,
    MetaItem,
    ModeratorBadge,
    SectionTitle,
    ProfileSection,
    LogoutButton,
    NotLoggedIn,
    NotLoggedInTitle,
    NotLoggedInText,
    LoginButton
};