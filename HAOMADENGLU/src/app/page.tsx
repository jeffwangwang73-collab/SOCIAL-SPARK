import { AuthForm } from '@/components/auth-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-black p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border bg-background shadow-2xl">
        <AuthForm />
      </div>
    </main>
  );
}
