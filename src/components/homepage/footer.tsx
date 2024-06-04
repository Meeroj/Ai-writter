// Footer.tsx

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('homePage');
  return (
    <footer className="bg-white dark:bg-gray-900">
      <hr />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {t('footer.logo')}
              </span>
            </Link>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {t('footer.legal.title')}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  to="/privacy-policy"
                  className="hover:underline"
                  data-testid="@footer/privacy-policy"
                >
                  {t('footer.legal.first')}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  {t('footer.legal.second')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{' '}
            <Link to="/" className="hover:underline">
              {t('footer.link')}
            </Link>
            {t('footer.reserved')}
          </span>
        </div>
      </div>
    </footer>
  );
}
