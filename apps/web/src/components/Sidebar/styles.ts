import styled from 'styled-components';

import Link from 'next/link';

const SidebarContainer = styled.aside<{$isCollapsed: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: ${(props) => (props.$isCollapsed ? '70px' : '280px')};
    height: 100vh;
    background-color: #0A0A0A;
    z-index: 50;
    transform: translateX(${(props) => (props.$isCollapsed ? '0' : '-100%')});
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(212, 175, 55, 0.1);
    
    @media (min-width: 768px) {
        position: sticky;
        transform: translateX(0);
    }
`;

const CollapseButton = styled.button`
    position: absolute;
    top: 50%;
    right: -12px;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 60;
    transform: translateY(-50%);
    
    @media (max-width: 767px) {
        display: none;
    }
`;

const SidebarHeader = styled.div`
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
`;

const Logo = styled.img<{ $isCollapsed: boolean }>`
    width: 2.4rem;
    height: 2.4rem;

    margin-left: ${(props) => (props.$isCollapsed ? '-.5rem' : '0')};
`;

const Text = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.1em;

    span {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;

const NavItem = styled.div<{ $isActive: boolean; $isCollapsed: boolean }>`
    padding: ${(props) => (props.$isCollapsed ? '0.75rem' : '0.75rem 1.5rem')};
    margin: 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$isCollapsed ? 'center' : 'flex-start')};
    color: ${(props) => (props.$isActive ? ({ theme }) => theme.colors.primary : 'white')};
    background-color: ${(props) => (props.$isActive ? 'rgba(212, 175, 55, 0.05)' : 'transparent')};
    border-left: 3px solid ${(props) => (props.$isActive ? ({ theme }) => theme.colors.primary : 'transparent')};
    transition: all 0.2s ease;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

const NavIcon = styled.span<{ $isCollapsed: boolean }>`
    margin-right: ${(props) => (props.$isCollapsed ? '0' : '0.75rem')};
    display: flex;
    align-items: center;
`;

const NavText = styled.span<{ $isCollapsed: boolean }>`
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    font-family: 'Space Mono', monospace;
    display: ${(props) => (props.$isCollapsed ? 'none' : 'flex')};
    align-items: center;
`;

const LiveIndicator = styled.span`
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #F44336;
    border-radius: 50%;
    margin-left: 0.5rem;
    animation: pulse 1.5s infinite;
    
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 40;
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    
    @media (min-width: 768px) {
        display: none;
    }
`;

const SidebarFooter = styled.div`
    margin-top: auto;
    padding: 1.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.1);
    font-size: 0.75rem;
    color: #666;
    text-align: center;
`;

const GoldText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`;

const UserSection = styled.div<{ $isCollapsed?: boolean }>`
    padding: ${(props) => (props.$isCollapsed ? '1rem 0.5rem' : '1rem 1.5rem')};
    border-top: 1px solid rgba(212, 175, 55, 0.1);
    margin-top: auto;
    display: flex;
    justify-content: ${(props) => (props.$isCollapsed ? 'center' : 'flex-start')};
`;

const UserInfo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: white;
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const UserAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(212, 175, 55, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UserName = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
`;

const LoginButton = styled(Link)<{ $isCollapsed?: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${(props) => (props.$isCollapsed ? '0.5rem' : '0.5rem 1rem')};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background-color: rgba(212, 175, 55, 0.1);
    }
`;

export {
    SidebarContainer,
    SidebarHeader,
    Logo,
    Text,
    CollapseButton,
    SidebarFooter,
    GoldText,
    NavList,
    NavItem,
    NavIcon,
    NavText,
    LiveIndicator,
    Overlay,
    UserSection,
    UserInfo,
    UserAvatar,
    UserName,
    LoginButton
};