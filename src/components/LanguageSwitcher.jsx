'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

const locales = ['en', 'ru', 'kk'];


export default function LanguageSwitcher() {
  const pathname = usePathname(); // e.g. /en/about
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLocale = pathname.split('/')[1] || 'ru'; // fallback to ru

  const handleLocaleChange = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the [locale] part
    const newPath = segments.join('/');

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={clsx(
            'px-3 py-1 rounded border cursor-pointer',
            locale === currentLocale
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-800 border-gray-300',
            isPending && 'opacity-50 cursor-not-allowed'
          )}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
