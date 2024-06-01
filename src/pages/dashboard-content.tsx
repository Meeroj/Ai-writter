import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TGeneratedContent } from '@/shared/types/generated-content.ts';
import { useContentContext } from '@/contexts/content.context.tsx';
import ContentViewer from '@/components/dashboard/content-viewer.tsx';
import { StarIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

export default function DashboardContent() {
  const [generatedContent, setGeneratedContent] = useState<TGeneratedContent>();
  const { getContentById, updateById } = useContentContext();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const result = getContentById(id);
      setGeneratedContent(result);
    }
  }, [id, getContentById]);

  const handleSave = (generatedContent: TGeneratedContent) => {
    updateById(generatedContent.id, generatedContent);
  };

  if (!generatedContent) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }

  const handleRateChange = (rate: number) => {
    if (generatedContent) {
      handleSave({
        ...generatedContent,
        rate,
      });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-semibold">{generatedContent.title}</h1>
        <div className="flex gap-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <StarIcon
                key={index}
                onClick={() => handleRateChange(index + 1)}
                className={clsx(
                  'w-8 h-8 cursor-pointer',
                  (generatedContent.rate || 0) > index && 'fill-black'
                )}
              />
            ))}
        </div>
      </div>
      <ContentViewer
        generatedContent={generatedContent}
        key={generatedContent.id}
        onSave={handleSave}
      />
    </div>
  );
}
