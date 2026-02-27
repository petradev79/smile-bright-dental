import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20">
      <h1 className="font-display text-6xl md:text-8xl font-bold text-primary-500">404</h1>
      <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-neutral-900">
        Page Not Found
      </h2>
      <p className="mt-3 font-body text-base text-neutral-600 text-center max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or no longer exists.
      </p>
      <div className="mt-8">
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
