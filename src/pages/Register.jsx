import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

export default function Register() {
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
      const response = await fetch("http://localhost:8080/auth/register", {
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
      console.error("Error to register:", error);
      alert("Error server conection.");
    }
  };

  return (
    <>
      <div className="login-container cursor-default">
        <h1 className="text-3xl font-serif mb-4 text-[var(--color-oxford-blue)]">
          Create Your Account
        </h1>
        <p className="mb-6 text-[var(--color-space-cadet)] bold text-center cursor: default">
         Start tracking what really drives your team’s growth.
         {" "}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="usernameSignUp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
            className="login-input mb-4"
            required
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a secure password"
            id="passwordSignUp"
            className="login-input mb-4"
          />
          <button type="submit" className="button-login">
            Create Your Account
          </button>
        </form>
      </div>
    </>
  );
}
