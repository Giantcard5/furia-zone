import {
    MainLayout
} from '@/components/MainLayout';

import { 
    AuthRegister
} from '@/components/AuthRegister';

export default function RegisterPage() {
    return (
        <MainLayout>
            <AuthRegister />
        </MainLayout>
    );
};