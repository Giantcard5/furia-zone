import {
    MainLayout 
} from '@/components/MainLayout';

import {
    LiveMatchStatus
} from '@/components/LiveMatch';
import { 
    LastMatchResult 
} from '@/components/LastMatchResult';

import {
    matchStatus
} from '@/lib/mock-data';

export default function LiveMatchPage() {
    const isLive = matchStatus.isLive;

    return (
        <MainLayout>
            {isLive ? <LiveMatchStatus /> : <LastMatchResult />}
        </MainLayout>
    );
};