"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLink, AuthShell, Field, LimeButton } from "@/components/Auth";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") || "");
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    router.push("/search");
  }

  return (
    <AuthShell
      showcaseTitle="Sign up and come in"
      showcaseBody="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title="Welcome to ByteSpace"
      footer={
        <>
          Already have an account? <AuthLink href="/login">Login</AuthLink>
        </>
      }
    >
      <form onSubmit={onSubmit} className="flex flex-col items-end gap-6">
        <Field label="Full Name" name="name" placeholder="Jamie Davis" />
        <Field label="Email" name="email" type="email" placeholder="designer@example.com" />
        <Field label="Password" name="password" type="password" placeholder="********" />
        {error ? <p className="w-full text-sm text-red-600">{error}</p> : null}
        <LimeButton>Continue</LimeButton>
      </form>
    </AuthShell>
  );
}
