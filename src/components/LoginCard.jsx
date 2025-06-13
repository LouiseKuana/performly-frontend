export default function LoginCard() {
  return (
    <div className="login-container cursor-default">
      <h1 className="text-3xl font-serif mb-4 text-[var(--color-oxford-blue)]">
        HR Control Panel
      </h1>
      <p className="mb-6 text-[var(--color-space-cadet)] bold text-center cursor: default">
        Monitor and analyze employee growth with accurate data and reliable
        insights.
      </p>
      <form>
        <input
          type="email"
          placeholder="Enter your corporate email"
          className="login-input mb-4"
          required
        />
        <input
          type="password"
          placeholder="Your secure password"
          className="login-input mb-6"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-[var(--color-oxford-blue)] text-[var(--color-frenchgray-dark)] font-semibold rounded hover:bg-[var(--color-chinese-violet)] transition cursor-pointer"
        >
          Access Dashboard
        </button>
      </form>
      <p className="mt-6 text-center text-[var(--color-space-cadet)] text-sm">
        Forgot your password?{" "}
        <a href="/recover" className="text-[var(--color-champagne)] hover:underline">
          Recover Access
        </a>
      </p>
    </div>
  );
}
