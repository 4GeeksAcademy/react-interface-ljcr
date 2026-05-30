import Link from "next/link";

const navItems = ["Explore", "Wishlists", "Trips", "Inbox", "Profile"];

export const DesktopTopBar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface-white)]/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between">
        <Link href="/" className="text-4xl font-bold tracking-tight text-[var(--color-surface-tint)]">
          Explore
        </Link>
        <nav className="flex items-center gap-10 text-xs font-semibold text-[var(--color-text-muted)]">
          {navItems.map((item, index) => (
            <button
              key={item}
              type="button"
              className={index === 0 ? "text-[var(--color-primary)]" : "hover:text-[var(--color-on-surface)]"}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
