export function Link({ href, children, variation }: { href: string; children: React.ReactNode; variation?: 'underline' | 'default' }) {
  return (
    variation === 'underline' ? (
      <a
        href={href}
        target="_blank"
        className="inline-flex items-center font-semibold hover:underline"
      >
        {children}
      </a>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="transition"
      >
        {children}
      </a>
    )
  );
}