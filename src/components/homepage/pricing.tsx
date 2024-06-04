// Pricing.tsx

import { CheckIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

export default function Pricing() {
  const { t } = useTranslation('homePage');
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('pricing.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {t('pricing.card.title')}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {t('pricing.card.subtitle')}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-black">
                {t('pricing.card.included.title')}
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-black"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {t('pricing.card.included.payTime')}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $30
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <Link to="/auth/register">
                  <Button className="mt-4">
                    {t('pricing.card.included.button')}
                  </Button>
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  {t('pricing.card.included.payTimeSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
