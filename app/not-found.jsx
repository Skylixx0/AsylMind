// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Упс! Страница не найдена</h1>
      <p className="text-lg mb-6">Похоже, вы попали не туда 😢</p>
      <Link
        href="/"
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
