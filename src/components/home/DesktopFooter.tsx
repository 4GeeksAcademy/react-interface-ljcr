const sectionClass = "space-y-2 text-sm text-[var(--color-on-surface-variant)]";

export const DesktopFooter = () => {
  return (
    <footer className="mt-16 border-t border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] px-6 py-12">
      <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-4">
        <div className={sectionClass}>
          <h4 className="font-semibold text-[var(--color-on-surface)]">Support</h4>
          <p>Help Centre</p>
          <p>AirCover</p>
          <p>Anti-discrimination</p>
          <p>Disability support</p>
        </div>
        <div className={sectionClass}>
          <h4 className="font-semibold text-[var(--color-on-surface)]">Hosting</h4>
          <p>List your home</p>
          <p>AirCover for Hosts</p>
          <p>Hosting resources</p>
          <p>Community forum</p>
        </div>
        <div className={sectionClass}>
          <h4 className="font-semibold text-[var(--color-on-surface)]">Explore</h4>
          <p>Newsroom</p>
          <p>New features</p>
          <p>Careers</p>
          <p>Investors</p>
        </div>
        <div className={sectionClass}>
          <h4 className="font-semibold text-[var(--color-on-surface)]">Follow us</h4>
          <div className="flex gap-3 pt-1 text-base">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-outline-variant)]">◉</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-outline-variant)]">↗</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1320px] items-center justify-between border-t border-[var(--color-outline-variant)] pt-5 text-xs text-[var(--color-text-muted)]">
        <p>© 2026 Explore, Inc. • Privacy • Terms • Sitemap</p>
        <p>English (US) • $ USD</p>
      </div>
    </footer>
  );
};
