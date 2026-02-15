import React from "react";
import { AuthCard } from "./auth/auth.card";



const Auth = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-background overflow-hidden">
      <div className="relative z-10">
        <div className="aurora-bg absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/30 blur-[100px] pointer-events-none z-0" />
        <AuthCard />
      </div>
    </div>
  );
};

export default Auth;
