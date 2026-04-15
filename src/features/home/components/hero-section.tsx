import { siteConfig } from "@/shared/config/site";

export function HeroSection() {
  return (
    <section className="space-y-4 rounded-2xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/20 dark:bg-zinc-900">
      <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Welcome to
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {siteConfig.name}
      </h1>
      <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
        {siteConfig.description}
      </p>
    </section>
  );
}
