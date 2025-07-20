

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the login logic here
    // For example, you can use signIn from next-auth to authenticate the user
    await signIn("credentials", { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
     
        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2"
            />
            <button
              type="submit"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Sign in
            </button>
          </form>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => signIn("microsoft")}
          >
            Sign in with Microsoft
          </button>
        </div>
      
    </div>
  );
}