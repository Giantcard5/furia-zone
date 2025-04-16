import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
    background-color: #000;
    color: #fff;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #FFD700;
`;

export const Description = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #ccc;
`;

export const Button = styled.button`
    padding: 0.8rem 2rem;
    font-size: 1rem;
    background-color: #FFD700;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #FFC000;
    }
`; 