import React from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";


export default async function RootLayout({ 
  children,
  params
 }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
 }
) {

  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  );
}