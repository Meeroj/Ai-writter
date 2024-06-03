import PromptHistory from '@/components/dashboard/prompt-history.tsx';
import { PencilSquareIcon } from '@heroicons/react/16/solid';
import { useAppContext } from '@/contexts/app.context.tsx';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { useContentContext } from '@/contexts/content.context.tsx';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { sidebarOpen } = useAppContext();
  const { generatingContent, getPromptHistory } = useContentContext();
  const historyItems = getPromptHistory();
  return (
    <nav
      className={clsx(
        'transition-all duration-500 h-screen overflow-x-hidden md:w-80 md:border-r md:p-4',
        sidebarOpen ? 'w-1/2 border-r p-2' : 'w-0'
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">AI Writer</h1>
        {generatingContent ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Link to="/dashboard">
            <PencilSquareIcon className="w-6 h-6" />
          </Link>
        )}
      </div>
      <PromptHistory items={historyItems} />
    </nav>
  );
}
