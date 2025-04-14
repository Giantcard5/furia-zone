import styled from 'styled-components';

const SidebarContainer = styled.aside<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background-color: #0A0A0A;
    z-index: 50;
    transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(212, 175, 55, 0.1);
    
    @media (min-width: 768px) {
        position: sticky;
        transform: translateX(0);
    }
`;

const SidebarHeader = styled.div`
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
`;

const Logo = styled.img`
    width: 2.4rem;
    height: 2.4rem;
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

const CloseButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
        display: none;
    }
`;

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;

const NavItem = styled.div<{ isActive: boolean }>`
    padding: 0.75rem 1.5rem;
    margin: 0.25rem 0;
    display: flex;
    align-items: center;
    color: ${(props) => (props.isActive ? ({ theme }) => theme.colors.primary : 'white')};
    background-color: ${(props) => (props.isActive ? 'rgba(212, 175, 55, 0.05)' : 'transparent')};
    border-left: 3px solid ${(props) => (props.isActive ? ({ theme }) => theme.colors.primary : 'transparent')};
    transition: all 0.2s ease;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

const NavIcon = styled.span`
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
`;

const NavText = styled.span`
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    font-family: 'Space Mono', monospace;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 40;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    
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

export {
    SidebarContainer,
    SidebarHeader,
    Logo,
    Text,
    CloseButton,
    NavList,
    NavItem,
    NavIcon,
    NavText,
    Overlay,
    SidebarFooter,
    GoldText,
};