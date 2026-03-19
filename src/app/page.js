import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold tracking-tight text-center text-gray-900 dark:text-white sm:text-left">
          Mayank Developer
        </h1>
        <p className="mt-4 text-2xl text-gray-600 dark:text-gray-300 sm:text-left">
          A passionate developer building amazing web applications.
        </p>
      </main>
    </div>
  );
}
