export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto bg-background text-primary-text font-sans antialiased">
      {children}
    </main>
  ); 
}