'use client';

import React, {
    useState
} from 'react';

import {
    useRouter
} from 'next/navigation';

import Link from 'next/link'

import {
    LogIn,
    AlertCircle
} from 'lucide-react'

import {
    useAuth
} from '@/hooks/useAuth';

import * as S from './styles';

export function AuthLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login } = useAuth();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const success = await login(email, password);
            if (success) {
                router.push('/chat');
            } else {
                setError('Invalid email or password. Please try again.');
            };
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err);
        } finally {
            setIsSubmitting(false);
        };
    };

    return (
        <S.Container>
            <S.FormContainer>
                <S.FormHeader>
                    <S.FormTitle>LOGIN</S.FormTitle>
                    <S.FormDescription>Sign in to your FURIA fan account</S.FormDescription>
                </S.FormHeader>

                {error && (
                    <S.ErrorMessage>
                        <AlertCircle size={16} />
                        {error}
                    </S.ErrorMessage>
                )}

                <S.Form onSubmit={handleSubmit}>
                    <S.FormGroup>
                        <S.Label htmlFor='email'>EMAIL</S.Label>
                        <S.Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor='password'>PASSWORD</S.Label>
                        <S.Input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </S.FormGroup>

                    <S.SubmitButton type='submit' disabled={isSubmitting}>
                        {isSubmitting ? (
                            'SIGNING IN...'
                        ) : (
                            <>
                                <LogIn size={18} />
                                SIGN IN
                            </>
                        )}
                    </S.SubmitButton>
                </S.Form>

                <S.LinkContainer>
                    Don't have an account? <Link href='/auth/register'>Register here</Link>
                </S.LinkContainer>
            </S.FormContainer>
        </S.Container>
    );
};