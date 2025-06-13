import { useState } from "react";
import { MoreHorizontal } from "lucide-react"; 
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (label) => {
    switch (label) {
      case "Sign In":
        return navigate("/signin");
      case "Learn more":
        return navigate("/");
      case "Open Project":
        return navigate("/project");
      case "LinkedIn":
        return window.open("https://www.linkedin.com/in/seu-perfil", "_blank"); // ou uma rota interna
      default:
        return;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* flowing menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full shadow-lg bg-[var(--color-oxford-blue)] text-[var(--color-platinum)] hover:bg-[var(--color-oxford-blue)]/70 transition flex items-center justify-center cursor-pointer"
      >
        <MoreHorizontal size={24} />
      </button>

      {/* menu animation*/}
      <div
        className={clsx(
          "mt-2 space-y-2 transition-all duration-300",
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {["Sign In", "Learn more", "Open Project", "LinkedIn"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className="block w-40 text-left px-4 py-2 rounded-md bg-white/10 backdrop-blur-md text-[var(--color-platinum)] hover:bg-[var(--color-delft-blue)]/10 cursor-pointer hover:text-[var(--color-delft-blue)] font-serif text-sm transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
