import { Loader, PlusCircle } from 'lucide-react';
import PromptHistory from './prompt-history';
import { useContentContext } from '@/contexts/content.context';

export default function Sidebar() {
  const { generatingContent, getPromptHistory } = useContentContext();
  const historyItems = getPromptHistory();
  return (
    <div className={`h-screen bg-white md:relative w-60 border-r p-4 z-50`}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold ">AI writter</h1>
        <button>
          {generatingContent ? (
            <Loader className="h-6 w-6 animate-spin" />
          ) : (
            <PlusCircle />
          )}
        </button>
      </div>
      <PromptHistory items={historyItems} />
    </div>
  );
}
