import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TGeneratedContent } from '@/shared/types/generated-content.ts';
import { useContentContext } from '@/contexts/content.context.tsx';
import ContentViewer from '@/components/dashboard/content-viewer.tsx';

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

  return (
    <div>
      <h1 className="text-3xl font-semibold">{generatedContent.title}</h1>
      <ContentViewer
        generatedContent={generatedContent}
        key={generatedContent.id}
        onSave={handleSave}
      />
    </div>
  );
}
