'use client';

import { Link } from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui/components/button';

import { paths } from '@/config/paths';

const LoginPage = () => {
  const router = useRouter();

  const onSuccess = (): void => {
    router.push(paths.home.getHref());
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link href={paths.home.getHref()} className="flex flex-col items-center gap-2 font-medium">
            <div className="flex items-center justify-center rounded-md text-6xl">
              <div className="bg-blue-500 h-16 w-16 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
            </div>
            <span className="sr-only">React Boilerplate</span>
          </Link>
          <h1 className="text-xl font-bold">Welcome to React Boilerplate</h1>
          <div className="text-secondary-foreground text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href={paths.auth.register.getHref()} className="hover:text-primary underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <Button className="w-full" onClick={onSuccess}>
            Continue to Dashboard
          </Button>
          <Button variant="outline" className="w-full" type="button">
            <span className="mr-2">G</span>
            Continue with Google
          </Button>
        </div>
        <div className="text-muted-foreground hover:[&_a]:text-primary text-balance text-center text-xs [&_a]:underline [&_a]:underline-offset-4">
          By clicking continue, you agree to our <Link href="#">Terms of Service</Link> and{' '}
          <Link href="#">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
