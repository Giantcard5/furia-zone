import {
    MainLayout 
} from '@/components/MainLayout';

import {
    LiveMatchStatus
} from '@/components/LiveMatch';

export default function LiveMatchPage() {
    return (
        <MainLayout>
            <LiveMatchStatus />
        </MainLayout>
    );
};