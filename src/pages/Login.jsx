import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const invalidUsername = username.length > 0 && !usernameRegex.test(username);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (invalidUsername) {
      alert("Please, correct you username.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/welcome");
      } else {
        const data = await response.text();
        alert("Error: " + data);
      }
    } catch (error) {
      console.error("Error to authenticate:", error);
      alert("Error server conection.");
    }
  };
  return (
    <div className="login-container cursor-default">
      <h1 className="text-3xl font-serif mb-4 text-[var(--color-oxford-blue)]">
        HR Control Panel
      </h1>
      <p className="mb-6 text-[var(--color-space-cadet)] bold text-center cursor: default">
        Monitor and analyze employee growth with accurate data and reliable
        insights.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="usernameSignIn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="login-input mb-4"
          required
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your secure password"
          id="passwordSignIn"
          className="login-input mb-4"
        />
        <button type="submit" className="button-login">
          Access Dashboard
        </button>
      </form>
      {/* <p className="mt-6 text-center text-[var(--color-space-cadet)] text-sm">
        Forgot your password?{" "}
        <a href="/recover" className="text-[var(--color-champagne)] hover:underline">
          Recover Access
        </a>
      </p> */}
    </div>
  );
}
