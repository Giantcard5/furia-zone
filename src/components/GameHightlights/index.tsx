'use client'

import { 
    useState 
} from 'react';

import { 
    Play, 
    Clock 
} from 'lucide-react';

import { 
    mockHighlights 
} from '@/lib/mock-data';

import * as S from './styles';

export function GameHighlights() {
    const [selectedHighlight, setSelectedHighlight] = useState<string | null>(null);

    const openHighlight = (id: string) => {
        setSelectedHighlight(id);
    };

    const closeHighlight = () => {
        setSelectedHighlight(null);
    };

    return (
        <S.HighlightsContainer>
            {mockHighlights.map((highlight) => (
                <S.HighlightCard key={highlight.id}>
                    <S.HighlightPreview onClick={() => openHighlight(highlight.id)}>
                        <S.PreviewImage image={highlight.thumbnail} />
                        <S.PlayButton>
                            <Play size={24} fill='white' />
                        </S.PlayButton>
                    </S.HighlightPreview>

                    <S.HighlightInfo>
                        <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
                        <S.HighlightMeta>
                            <S.MetaItem>
                                <Clock size={16} />
                                {highlight.time}
                            </S.MetaItem>
                            <div>
                                {highlight.tags.map((tag, index) => (
                                    <S.HighlightTag key={index}>{tag}</S.HighlightTag>
                                ))}
                            </div>
                        </S.HighlightMeta>
                    </S.HighlightInfo>
                </S.HighlightCard>
            ))}

            <S.VideoModal isOpen={!!selectedHighlight} onClick={closeHighlight}>
                <S.CloseButton onClick={closeHighlight}>✕</S.CloseButton>
                <S.VideoContainer onClick={(e) => e.stopPropagation()}>
                    <S.VideoWrapper>
                        <S.VideoContent>
                            <p>Video player would be here</p>
                        </S.VideoContent>
                    </S.VideoWrapper>
                </S.VideoContainer>
            </S.VideoModal>
        </S.HighlightsContainer>
    )
}