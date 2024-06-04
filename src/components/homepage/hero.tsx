import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { useAuthContext } from '@/contexts/auth.context.tsx';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import i18n from '@/i18n';
import { useEffect, useState } from 'react';

enum LanguageCode {
  English = 'en',
  Uzbek = 'uz',
}

type TLanguage = {
  label: string;
  flag: string;
};

const LANGUAGES: { [code in LanguageCode]: TLanguage } = {
  [LanguageCode.English]: {
    label: 'English 🇬🇧',
    flag: '🇬🇧',
  },
  [LanguageCode.Uzbek]: {
    label: "O'zbekcha 🇺🇿",
    flag: '🇺🇿',
  },
};

export default function Hero() {
  const { user } = useAuthContext();
  const { t } = useTranslation('homePage');
  const [activeLanguage, setActiveLanguage] = useState<TLanguage>(LANGUAGES.en);

  useEffect(() => {
    setActiveLanguage(LANGUAGES[i18n.language as LanguageCode]);
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  };
  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 font-semibold">
              {t('logo')}
            </Link>
          </div>
          <div className="flex gap-2">
            {user ? (
              <Link
                to="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
              >
                {t('dashboard')}
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
              >
                {t('login')} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{activeLanguage.flag}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(LANGUAGES).map(([code, { label }]) => (
                  <DropdownMenuItem
                    key={code}
                    className="cursor-pointer"
                    onClick={() => changeLanguage(code)}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <hr />
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('mainTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {user ? (
                <Link to="/dashboard" data-testid="@hero/dashboard-link">
                  <Button size="lg">{t('login')}</Button>
                </Link>
              ) : (
                <Link to="/auth/register" data-testid="@hero/register-link">
                  <Button size="lg">{t('heroButton')}</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
