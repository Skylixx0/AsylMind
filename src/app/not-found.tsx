// app/not-found.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("not-found");

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg mb-6">{t("description")} 😢</p>
      <Link
        href="/"
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
      >
        {t("backToHome")}
      </Link>
    </div>
  );
}
