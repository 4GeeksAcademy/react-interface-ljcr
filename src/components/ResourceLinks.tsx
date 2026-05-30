import Image from "next/image";
import type { ResourceLink } from "@/types/navigation";

const resources: ResourceLink[] = [
  {
    label: "Deploy Now",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    variant: "primary",
  },
  {
    label: "Documentation",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    variant: "secondary",
  },
];

const classesByVariant: Record<ResourceLink["variant"], string> = {
  primary:
    "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] gap-2",
  secondary:
    "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
};

export const ResourceLinks = () => {
  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
      {resources.map((resource) => (
        <a
          key={resource.label}
          className={`flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors md:w-[158px] ${classesByVariant[resource.variant]}`}
          href={resource.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {resource.variant === "primary" ? (
            <>
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              {resource.label}
            </>
          ) : (
            resource.label
          )}
        </a>
      ))}
    </div>
  );
};
