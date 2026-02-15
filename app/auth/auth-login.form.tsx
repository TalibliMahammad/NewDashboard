"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { div } from "framer-motion/client";
import { AlertCircle, Chrome } from "lucide-react";

import { useState } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { CustomAlert } from "@/components/ui/CustomAlert";

export function AuthLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, setView } = useAuthStore((state) => state);
  const setAlert = useAuthStore((state) => state.setAlert);
  const loginWithGoogle = useAuthStore((state) => state.loginWithGoogle);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const success  =  await login(email,password)
    if(success){
   setAlert({ message: "Welcome back, Mahammad!", type: "success" });
   await new Promise((resolve) => setTimeout(resolve, 2000));
   setView("dashboard");
    }else{
     setAlert({ message: "Invalid email or password", type: "error" });
     setIsLoading(false)
       console.log('Login attempt:', { email, password })
    }
  };


  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-2 ">
        <div className="space-y-2  flex-col flex gap-1">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground/90"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border-white/10 placeholder:text-foreground/40 focus:border-white/20 focus:bg-white/10  "
          />
        </div>

        <div className="space-y-2 flex-col flex gap-1 ">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-foreground/90"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/5  border-white/10 placeholder:text-foreground/10 focus:border-white/20  focus:bg-white/20"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-medium transition-all duration-200"
        >
          {isLoading ? "Signing in ... " : "Sign in"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-foreground/60">
            Or continue with
          </span>
        </div>
      </div>

      <button onClick={loginWithGoogle}
        className="glow-effect w-full flex items-center justify-center   gap-2 py-2.5 px-4 rounded-lg bg-white/5  hover:bg-white/10 text-foreground transition-all duration-200" //   onClick={handleGoogleSignIn}
      >
        <Chrome className="w-4 h-4 " />
        <span className="text-sm font-medium"> Continue with Google</span>
      </button>
    </div>
  );
}
