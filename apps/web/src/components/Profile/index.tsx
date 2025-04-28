'use client';

import {
    useState,
    useRef,
    useEffect
} from 'react';

import {
    useRouter
} from 'next/navigation';

import Image from 'next/image';

import {
    LogOut,
    User,
    Calendar,
    Shield,
    Edit,
    MessageSquare,
    Save,
    X
} from 'lucide-react';

import {
    useAuth
} from '@/hooks/useAuth';

import * as S from './styles';

import {
    theme
} from '@/styles/theme';

import {
    apiService
} from '@/lib/api-service';

interface Message {
    id: string;
    content: string;
    timestamp: string;
    user: {
        id: string;
        name: string;
        avatar: string;
        isModerator: boolean;
    };
}

export function UserProfile() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null)

    const { user, logout, isAuthenticated } = useAuth();

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedUsername, setEditedUsername] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userMessages, setUserMessages] = useState<Message[]>([]);
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const handleEditClick = () => {
        if (user) {
            setEditedName(user.name);
            setEditedUsername(user.username);
            setEditedEmail(user.email);
            setIsEditing(true);
            setError(null);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setError(null);
    };

    const handleSaveEdit = async () => {
        if (!user) return;
        
        setIsSaving(true);
        setError(null);
        
        try {
            if (editedUsername !== user.username) {
                const usernameCheck = await apiService.checkUsernameExists(editedUsername);
                if (usernameCheck.data) {
                    setError('Username is already taken');
                    setIsSaving(false);
                    return;
                };
            };
            
            if (editedEmail !== user.email) {
                const emailCheck = await apiService.checkEmailExists(editedEmail);
                if (emailCheck.data) {
                    setError('Email is already taken');
                    setIsSaving(false);
                    return;
                };
            };
            
            const updatedUser = {
                ...user,
                name: editedName,
                username: editedUsername,
                email: editedEmail
            };
            
            const response = await apiService.updateUser(updatedUser);
            
            if (response.error) {
                setError(response.error);
                setIsSaving(false);
                return;
            };
            
            // Update local storage and context
            localStorage.setItem('furiaUser', JSON.stringify(updatedUser));
            window.location.reload();
            
        } catch (err) {
            setError('An error occurred while saving your profile');
            setIsSaving(false);
        };
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        };
    };

    useEffect(() => {
        const fetchUserMessages = async () => {
            if (!user?.id) return;
            
            setIsLoadingMessages(true);
            try {
                const response = await apiService.getMessages();
                if (response.error) {
                    console.error('Failed to fetch messages:', response.error);
                    return;
                }
                
                const messages = (response.data as Message[]).filter(
                    (message) => message.user.id === user.id
                ).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                
                setUserMessages(messages);
            } catch (err) {
                console.error('Error fetching messages:', err);
            } finally {
                setIsLoadingMessages(false);
            }
        };

        fetchUserMessages();
    }, [user?.id]);

    if (!isAuthenticated) {
        return (
            <S.NotLoggedIn>
                <S.NotLoggedInTitle>NOT LOGGED IN</S.NotLoggedInTitle>
                <S.NotLoggedInText>You need to log in to view your profile</S.NotLoggedInText>
                <S.LoginButton href='/auth/login'>
                    <User size={18} />
                    LOG IN
                </S.LoginButton>
            </S.NotLoggedIn>
        );
    };

    return (
        <S.ProfileContainer>
            <S.ProfileHeader>
                <S.AvatarContainer>
                    <Image
                        src={user?.avatar || '/default-user.svg'}
                        alt={user?.username || 'User'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </S.AvatarContainer>

                <S.ProfileInfo>
                    {isEditing ? (
                        <>
                            <S.FormGroup>
                                <S.Label htmlFor='username'>USERNAME</S.Label>
                                <S.Input 
                                    id='username' 
                                    value={editedUsername} 
                                    onChange={(e) => setEditedUsername(e.target.value)} 
                                    disabled={isSaving}
                                />
                            </S.FormGroup>
                            <S.FormGroup>
                                <S.Label htmlFor='name'>FULL NAME</S.Label>
                                <S.Input 
                                    id='name' 
                                    value={editedName} 
                                    onChange={(e) => setEditedName(e.target.value)} 
                                    disabled={isSaving}
                                />
                            </S.FormGroup>
                            <S.FormGroup>
                                <S.Label htmlFor='email'>EMAIL</S.Label>
                                <S.Input 
                                    id='email' 
                                    type='email' 
                                    value={editedEmail} 
                                    onChange={(e) => setEditedEmail(e.target.value)} 
                                    disabled={isSaving}
                                />
                            </S.FormGroup>
                            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                            <S.ButtonGroup>
                                <S.SaveButton onClick={handleSaveEdit} disabled={isSaving}>
                                    <Save size={18} />
                                    {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
                                </S.SaveButton>
                                <S.CancelButton onClick={handleCancelEdit} disabled={isSaving}>
                                    <X size={18} />
                                    CANCEL
                                </S.CancelButton>
                            </S.ButtonGroup>
                        </>
                    ) : (
                        <>
                            <S.Username>{user?.username}</S.Username>
                            <S.Name>{user?.name}</S.Name>

                            {user?.isModerator && (
                                <S.ModeratorBadge>
                                    <Shield size={14} />
                                    MODERATOR
                                </S.ModeratorBadge>
                            )}

                            <S.ProfileMeta>
                                <S.MetaItem>
                                    <User size={14} />
                                    {user?.email}
                                </S.MetaItem>
                                <S.MetaItem>
                                    <Calendar size={14} />
                                    Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                                </S.MetaItem>
                            </S.ProfileMeta>

                            <S.LogoutButton onClick={handleLogout}>
                                <LogOut size={18} />
                                LOG OUT
                            </S.LogoutButton>
                        </>
                    )}
                </S.ProfileInfo>
            </S.ProfileHeader>

            <S.ProfileSection>
                <S.SectionTitle>
                    ACCOUNT SETTINGS
                    {!isEditing && (
                        <S.EditButton onClick={handleEditClick}>
                            <Edit size={14} />
                            EDIT PROFILE
                        </S.EditButton>
                    )}
                </S.SectionTitle>
                {!isEditing && (
                    <p style={{ color: theme.colors.text.secondary }}>
                        You can edit your profile information by clicking the 'EDIT PROFILE' button.
                    </p>
                )}
            </S.ProfileSection>

            <S.ProfileSection>
                <S.SectionTitle>
                    RECENT ACTIVITY
                    <span style={{ fontSize: '0.75rem', color: theme.colors.text.secondary }}>
                        {userMessages.length} messages
                    </span>
                </S.SectionTitle>

                <S.MessageList>
                    {isLoadingMessages ? (
                        <S.LoadingMessage>Loading messages...</S.LoadingMessage>
                    ) : userMessages.length > 0 ? (
                        userMessages.slice(0, 5).map((message) => (
                            <S.MessageItem key={message.id}>
                                <S.MessageHeader>
                                    <span>
                                        <MessageSquare size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                        Fan Chat
                                    </span>
                                    <span>{new Date(message.timestamp).toLocaleString()}</span>
                                </S.MessageHeader>
                                <S.MessageContent>{message.content}</S.MessageContent>
                            </S.MessageItem>
                        ))
                    ) : (
                        <S.NoMessages>You haven't sent any messages yet. Join the conversation in the Fan Chat!</S.NoMessages>
                    )}
                </S.MessageList>
            </S.ProfileSection>
        </S.ProfileContainer>
    );
};