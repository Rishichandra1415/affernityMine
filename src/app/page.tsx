import { PageContainer } from "@/shared/components";
import { mainNavigation } from "@/shared/constants/navigation";
import { HeroSection } from "@/features/home";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <PageContainer>
        <HeroSection />

        <section className="mt-8 space-y-3 rounded-2xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/20 dark:bg-zinc-900">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Suggested Main Navigation
          </h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                {item.label} - <span className="font-mono">{item.href}</span>
              </li>
            ))}
          </ul>
        </section>
      </PageContainer>
    </main>
  );
}
