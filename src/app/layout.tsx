import "@/styles/globals.css";
import { locales } from "../i18n/config";
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
 }) {
  
  const {locale} = await params;
  return (
    <html lang={locale || "ru"}>
      <body>
        {children}
      </body>
    </html>
  );
}
