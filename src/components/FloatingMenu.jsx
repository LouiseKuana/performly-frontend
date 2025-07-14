import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import clsx from "clsx";

const links = [
  {
    label: "Open Project",
    url: "https://github.com/LouiseKuana",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/louise-kuana/",
  },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-18 left-10 z-50">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-12 h-12 rounded-full shadow-lg bg-[var(--color-oxford-blue)] text-[var(--color-platinum)] hover:bg-[var(--color-oxford-blue)]/70 transition flex items-center justify-center cursor-pointer"
      >
        <MoreHorizontal size={24} />
      </button>

      <div
        className={clsx(
          "mt-2 space-y-2 transition-all duration-300",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {links.map(({ label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-40 text-left px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-[var(--color-platinum)] hover:bg-[var(--color-delft-blue)]/10 hover:text-[var(--color-delft-blue)] font-serif text-sm transition"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}