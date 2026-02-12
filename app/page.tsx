import {
  BarChart3,
  Calendar,
  Download,
  SettingsIcon,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import React, { Activity } from "react";
import { MetricCard } from "@/components/MetricCard";
import { TrafficChart } from "@/components/traffic-chart";
import { ActivityTable } from "@/components/activity-table";
import { Sidebar } from "@/components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}

      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Welcome to your dashboard. Here you can manage your application
                settings and view important information.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80">
                <Calendar className="mr-2" />
                This Month
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80">
                <Download className="mr-2" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80">
                <SettingsIcon className="mr-2" />
                Settings
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-8">
          {/* Metric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Users"
              value="12,484"
              change={12.5}
              changeLabel="vs last month"
              icon={<Users className="w-6 h-6" />}
              trend="up"
            />
            <MetricCard
              title="Revenue"
              value="$48,596"
              change={8.2}
              changeLabel="vs last month"
              icon={<TrendingUp className="w-6 h-6" />}
              trend="up"
            />
            <MetricCard
              title="Data Points"
              value="2.4M"
              change={3.1}
              changeLabel="vs last month"
              icon={<BarChart3 className="w-6 h-6" />}
              trend="down"
            />
            <MetricCard
              title="API Performance"
              value="98.6%"
              change={2.3}
              changeLabel="vs last month"
              icon={<Zap className="w-6 h-6" />}
              trend="up"
            />
          </div>
          {/* charts and activity */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Traffic Chart */}
            <div className="lg:col-span-2">
              <TrafficChart />
            </div>

            {/* Activity Sidebar */}
            <div>
              <ActivityTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
