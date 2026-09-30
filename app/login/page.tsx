"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthLink, AuthShell, Field, LimeButton } from "@/components/Auth";

export default function LoginPage() {
  const router = useRouter();

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    router.push("/search");
  }

  return (
    <AuthShell
      showcaseTitle="Sign in with ease"
      showcaseBody="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      footer={
        <span className="text-[#888]">
          New user? <AuthLink href="/register">Create an account</AuthLink>
        </span>
      }
    >
      <form onSubmit={onSubmit} className="flex flex-1 flex-col">
        <div className="flex flex-col items-end gap-6">
          <Field label="Email" name="email" type="email" placeholder="designer@example.com" />
          <Field label="Password" name="password" type="password" placeholder="********" />
          <LimeButton>Sign In</LimeButton>
        </div>
        <div className="my-10 flex items-center gap-[11px] text-lg text-[#888]">
          <span className="h-px flex-1 bg-[#d1d1d1]" />
          or
          <span className="h-px flex-1 bg-[#d1d1d1]" />
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1]"
            aria-label="Continue with Facebook"
          >
            <img src="/icon-facebook.svg" alt="" className="size-10" />
          </button>
          <button
            type="button"
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1]"
            aria-label="Continue with Google"
          >
            <img src="/icon-google.svg" alt="" className="size-10" />
          </button>
        </div>
      </form>
    </AuthShell>
  );
}
