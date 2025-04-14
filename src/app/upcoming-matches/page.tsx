import { 
    MainLayout 
} from '@/components/MainLayout';

import { 
    UpcomingMatches
} from '@/components/UpcomingMatches';

export default function UpcomingMatchesPage() {
    return (
        <MainLayout>
            <UpcomingMatches />
        </MainLayout>
    );
};