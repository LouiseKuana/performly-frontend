import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="cursor-default min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-serif font-semibold text-[var(--color-oxford-blue)] mb-8">
        <span>Welcome to </span>
        <span className="shiny-text"> Performly Lab</span>
      </h1>

      <div className="flex flex-col w-full max-w-md backdrop-blur-sm bg-[var(--color-platinum)]/40 rounded-[40px] shadow-xl p-8 transition-all">
        <p className="mt-2 text-[var(--color-space-cadet)] text-base font-light">
          <span className="font-bold">Performly Lab </span>
          <span>is a modern platform that helps HR teams track 360°
          feedback, visualize performance trends, and make smarter, data-driven
          decisions.</span>
        </p>

        <blockquote className="mt-3 p-4 italic border-l-4 border-[var(--color-oxford-blue)] bg-[var(--color-platinum)]/30 rounded-md text-[var(--color-space-cadet)]">
          Curious to see how it works?{" "}
          <strong className="text-[var(--color-oxford-blue)] font-semibold">
            Create your free account
          </strong>{" "}
          and explore the interactive dashboards, charts, and insights.
        </blockquote>

        <p className="mt-3 text-[var(--color-space-cadet)] text-base">
          <span className="font-semibold">Developed by Louise Akemi Kuana.</span>{" "}
          <span className="font-light">
            Performly Lab was built as part of my portfolio to showcase my skills in
            frontend and backend development, data visualization, and UX design.
          </span>
        </p>

        <button onClick={() => navigate("/register")} className="button-login">
          Create Your Free Account
        </button>
      </div>
    </div>
  );
}
