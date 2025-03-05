"use client";

import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  UserCircle,
  Mail,
  BarChart2
} from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-green-600">
              EnergyReferrals
            </Link>
            
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              
              <Link href="/campaigns">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Campaigns
                </Button>
              </Link>
              
              <Link href="/customers">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Users className="h-4 w-4" />
                  Customers
                </Button>
              </Link>
              
              <Link href="/analytics">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BarChart2 className="h-4 w-4" />
                  Analytics
                </Button>
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2">
              <UserCircle className="h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 