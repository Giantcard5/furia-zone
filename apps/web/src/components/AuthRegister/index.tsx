'use client';

import React, {
    useState
} from 'react';

import {
    useRouter
} from 'next/navigation';

import Link from 'next/link'

import {
    UserPlus,
    AlertCircle
} from 'lucide-react';

import {
    useAuth
} from '@/hooks/useAuth';

import * as S from './styles';

export function AuthRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register } = useAuth();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        };

        setIsSubmitting(true);

        try {
            const success = await register(name, email, username, password);
            if (success) {
                router.push('/chat');
            } else {
                setError('Email or username already exists. Please try again.');
            }
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
                    <S.FormTitle>REGISTER</S.FormTitle>
                    <S.FormDescription>Create your FURIA fan account</S.FormDescription>
                </S.FormHeader>

                {error && (
                    <S.ErrorMessage>
                        <AlertCircle size={16} />
                        {error}
                    </S.ErrorMessage>
                )}

                <S.Form onSubmit={handleSubmit}>
                    <S.FormGroup>
                        <S.Label htmlFor='name'>FULL NAME</S.Label>
                        <S.Input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor='email'>EMAIL</S.Label>
                        <S.Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor='username'>USERNAME</S.Label>
                        <S.Input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor='password'>PASSWORD</S.Label>
                        <S.Input
                            id='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor='confirmPassword'>CONFIRM PASSWORD</S.Label>
                        <S.Input
                            id='confirmPassword'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </S.FormGroup>

                    <S.SubmitButton type='submit' disabled={isSubmitting}>
                        {isSubmitting ? (
                            'CREATING ACCOUNT...'
                        ) : (
                            <>
                                <UserPlus size={18} />
                                CREATE ACCOUNT
                            </>
                        )}
                    </S.SubmitButton>
                </S.Form>

                <S.LinkContainer>
                    Already have an account? <Link href='/auth/login'>Login here</Link>
                </S.LinkContainer>
            </S.FormContainer>
        </S.Container>
    );
};
