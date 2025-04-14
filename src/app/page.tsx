import { 
    MainLayout 
} from '@/components/MainLayout';
import { 
    HeroSection 
} from '@/components/HeroSection';

export default function Home() {
    return (
        <MainLayout>
            <HeroSection />
        </MainLayout>
    );
};