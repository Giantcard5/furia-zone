import { 
    MainLayout 
} from '@/components/MainLayout';

import { 
    UserProfile 
} from '@/components/Profile';

export default function ProfilePage() {
    return (
        <MainLayout>
            <UserProfile />
        </MainLayout>
    );
};