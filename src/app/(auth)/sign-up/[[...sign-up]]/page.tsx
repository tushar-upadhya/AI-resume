import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <main className="flex h-screen items-center justify-center p-3">
      <SignIn />
    </main>
  );
};

export default SignUpPage;
