"use client";

import {
  BarChart3,
  Home,
  Settings,
  Users,
  FileText,
  Zap,
  HelpCircle,
  LogOut,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const navigationItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Analytics", href: "/analytics", icon: Users },
    { name: "Users", href: "/users", icon: FileText },
  ];

  const secondaryItems = [
    { name: "Intergrations", href: "/integrations", icon: Zap },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  return (
    <aside className=" fixed top-0 h-screen w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-border">
            <div className=" flex items-center gap-3" >

                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-primary-foreground"/></div>
                <div className="flex flex-col ">
                    <span className="text-lg font-semibold text-foreground">DataFlow</span>
                    <span className="text-xs text-muted-foreground">Analytics</span>
                </div>

            </div>
        </div>
      
    </aside>
  );
}
