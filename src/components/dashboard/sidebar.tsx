import PromptHistory from '@/components/dashboard/prompt-history.tsx';
import { PencilSquareIcon } from '@heroicons/react/16/solid';
import { useAppContext } from '@/contexts/app.context.tsx';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { useContentContext } from '@/contexts/content.context.tsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { sidebarOpen } = useAppContext();
  const { generatingContent, getPromptHistory } = useContentContext();
  const historyItems = getPromptHistory();
  const { t } = useTranslation('homePage');
  return (
    <nav
      className={clsx(
        'transition-all duration-500 h-screen overflow-x-hidden w-48 md:w-60 md:border-r md:p-4 bg-white',
        sidebarOpen ? 'w-1/2 border-r p-2' : 'w-0'
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{t('logo')}</h1>
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
