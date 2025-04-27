import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    max-width: 31rem;
    width: 31rem;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const FormHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const FormTitle = styled.h1`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.primary};
`;

const FormDescription = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Label = styled.label`
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    font-family: 'Space Mono', monospace;
`;

const Input = styled.input`
    padding: 0.75rem 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(212, 175, 55, 0.2);
    color: white;
    font-size: 0.875rem;
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    font-family: 'Space Mono', monospace;
    border: none;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background-color: #E5C158;
    }
    
    &:disabled {
        background-color: #666;
        cursor: not-allowed;
    }
`;

const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background-color: rgba(244, 67, 54, 0.1);
    border: 1px solid rgba(244, 67, 54, 0.3);
    color: #F44336;
    font-size: 0.875rem;
    margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
    text-align: center;
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    
    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

export {
    Container,
    FormContainer,
    FormHeader,
    FormTitle,
    FormDescription,
    Form,
    FormGroup,
    Label,
    Input,
    SubmitButton,
    ErrorMessage,
    LinkContainer
};