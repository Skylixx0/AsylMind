import React from "react";
import "@/styles/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { locales } from "@/src/i18n/config";
import { getTranslations } from "next-intl/server";



export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata( { params }: { params: Promise<{ locale: string }> }){
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'LocalLayout'});

  return {
    title: t('title'),
    description: t('description'),
  } 
}


export default async function RootLayout({ 
  children,
  params
 }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
 }
) {
  
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
        <body>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
  );
}