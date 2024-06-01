import ContentCreateForm from '@/components/dashboard/content-create-form.tsx';
import { useContentContext } from '@/contexts/content.context.tsx';
import { TContentCreateRequestParam } from '@/shared/types/content-create-request-param.ts';
import { useNavigate } from 'react-router-dom';

export default function DashboardHome() {
  const { generateContent, generatingContent } = useContentContext();
  const navigate = useNavigate();

  const handleSubmit = async (params: TContentCreateRequestParam) => {
    const result = await generateContent(params);
    if (result) {
      navigate(`/dashboard/content/${result.id}`);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Writer</h1>
      <ContentCreateForm
        isLoading={generatingContent}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
