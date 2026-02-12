import React, { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: ReactNode;
  trend: 'up' | 'down';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  icon,
  trend,
}) => {
  const isPositive = trend === 'up';
  
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
        </div>
        <div className="text-2xl">
          {icon}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : '-'}{Math.abs(change)}%
        </span>
        <span className="text-xs text-muted-foreground">{changeLabel}</span>
      </div>
    </div>
  );
};
