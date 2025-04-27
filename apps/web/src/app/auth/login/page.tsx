import {
    MainLayout
} from '@/components/MainLayout';

import {
    AuthLogin
} from '@/components/AuthLogin';

export default function LoginPage() {
    return (
        <MainLayout>
            <AuthLogin />
        </MainLayout>
    );
};