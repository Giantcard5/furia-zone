import {
    MainLayout 
} from '@/components/MainLayout';

import { 
    ChatInterface 
} from '@/components/Chat';

export default function ChatPage() {
    return (
        <MainLayout>
            <ChatInterface />
        </MainLayout>
    );
};