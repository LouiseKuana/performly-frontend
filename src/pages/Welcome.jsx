import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <CheckCircle size={60} className="text-[var(--color-oxford-blue)] mb-4" />
      
      <h1 className="text-3xl font-serif text-[var(--color-oxford-blue)] mb-2">
        Welcome to Performly!
      </h1>

      <p className="text-[var(--color-space-cadet)] text-base max-w-md mb-6">
        Your account was created successfully. Explore your dashboard to track performance, view insights, and make better decisions.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-[var(--color-oxford-blue)] hover:bg-[var(--color-space-cadet)] text-white font-semibold py-2 px-6 rounded-full shadow transition-all duration-200"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
