import Link from "next/link";

const items = [
  { href: "/", label: "Explore", icon: "⌕", active: true },
  { href: "/catalog", label: "Wishlists", icon: "♡" },
  { href: "/catalog", label: "Trips", icon: "◌" },
  { href: "/catalog", label: "Inbox", icon: "☰" },
  { href: "/catalog", label: "Profile", icon: "◍" },
];

export const MobileBottomNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--color-outline-variant)] bg-white/95 px-2 py-2 backdrop-blur md:hidden">
      <ul className="grid grid-cols-5">
        {items.map((item) => (
          <li key={item.label} className="text-center">
            <Link
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs ${
                item.active
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-on-surface-variant)]"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
