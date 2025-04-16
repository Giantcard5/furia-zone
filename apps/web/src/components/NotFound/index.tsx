'use client';

import Link from 'next/link';

import * as S from './styles';

export default function NotFound() {
    return (
        <S.Container>
            <S.Title>404 - Page Not Found</S.Title>
            <S.Description>Sorry, the page you are looking for does not exist.</S.Description>
            <Link href="/">
                <S.Button>Return to Home</S.Button>
            </Link>
        </S.Container>
    );
};