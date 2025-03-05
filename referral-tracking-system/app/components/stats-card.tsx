import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export function StatsCard({ title, value, icon: Icon, className, iconClassName }: StatsCardProps) {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="flex items-center">
        <div className={cn("bg-green-100 p-3 rounded-full", iconClassName)}>
          <Icon className="h-6 w-6 text-green-600" />
        </div>
        <div className="ml-4">
          <h2 className="text-gray-600 text-sm">{title}</h2>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
} 