export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-16 max-w-screen-xl mx-auto bg-[var(--color-background)] text-[var(--color-primary-text)] font-sans antialiased">
      {children}
    </main>
  ); // No sidebar
}