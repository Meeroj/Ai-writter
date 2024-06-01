import { useState } from 'react';
import ContentViewer from '@/components/dashboard/content-viewer.tsx';
import ContentCreateForm from '@/components/dashboard/content-create-form.tsx';
import { useContentContext } from '@/contexts/content.context.tsx';
import { TContentCreateRequestParam } from '@/shared/types/content-create-request-param.ts';

export default function DashboardHome() {
  const { generateContent, generatingContent } = useContentContext();
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: TContentCreateRequestParam) => {
    const result = await generateContent(params);
    setContent(result);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Writer</h1>
      {content ? (
        <ContentViewer content={content} />
      ) : (
        <ContentCreateForm
          isLoading={generatingContent}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
