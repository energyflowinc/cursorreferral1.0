"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "../components/header";
import { StatsCard } from "../components/stats-card";
import { ReferralsTable } from "../components/referrals-table";
import { Button } from "../components/ui/button";
import { Users, Clock, CheckCircle, DollarSign, TrendingUp, Plus, Download, Filter, BarChart2, Upload } from "lucide-react";
import { GenerateCodeModal } from "../components/generate-code-modal";
import { BulkImportModal } from "../components/bulk-import-modal";

// Import or define the Referral type to match the one in referrals-table.tsx
type ReferralStatus = "Completed" | "Installation Scheduled" | "Quote Provided" | "Pending";
type RewardStatus = "Paid" | "Pending";

interface Referral {
  id: number;
  referrer: string;
  referrerLocation: string;
  referralCode: string;
  referredCustomer: string;
  referredLocation: string;
  status: ReferralStatus;
  date: string;
  rewardStatus: RewardStatus;
  amount: string;
}

export default function Dashboard() {
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Sample data - in a real application, this would come from an API
  const referralStats = {
    totalReferrals: 42,
    pendingVerification: 7,
    successful: 35,
    rewardsGiven: 28,
    conversionRate: "83%",
    totalRevenue: "$875,000",
    totalRewardsAmount: "$8,750",
    projectedRevenue: "$1,050,000"
  };

  const recentReferrals: Referral[] = [
    { id: 1, referrer: "John Smith", referralCode: "JOHNS123456", referrerLocation: "123 Maple Street, Boston, MA 02108", referredCustomer: "Emma Johnson", referredLocation: "45 Harvard Square, Cambridge, MA 02138", status: "Completed", date: "2024-02-28", rewardStatus: "Paid", amount: "$250" },
    { id: 2, referrer: "Maria Garcia", referralCode: "MARIA234567", referrerLocation: "789 Congress Ave, Austin, TX 78701", referredCustomer: "David Brown", referredLocation: "567 Main Street, Round Rock, TX 78664", status: "Installation Scheduled", date: "2024-03-05", rewardStatus: "Pending", amount: "$250" },
    { id: 3, referrer: "Robert Wilson", referralCode: "ROBER345678", referrerLocation: "421 Pike Street, Seattle, WA 98101", referredCustomer: "Sarah Miller", referredLocation: "1200 Bellevue Way, Bellevue, WA 98004", status: "Quote Provided", date: "2024-03-01", rewardStatus: "Pending", amount: "$250" },
    { id: 4, referrer: "Jennifer Lee", referralCode: "JENNI456789", referrerLocation: "1001 Market Street, San Francisco, CA 94103", referredCustomer: "Michael Davis", referredLocation: "550 Grand Avenue, Oakland, CA 94610", status: "Completed", date: "2024-02-25", rewardStatus: "Paid", amount: "$250" },
    { id: 5, referrer: "Thomas Harris", referralCode: "THOMA567890", referrerLocation: "1644 Larimer Street, Denver, CO 80202", referredCustomer: "Elizabeth Clark", referredLocation: "1777 Broadway, Boulder, CO 80302", status: "Installation Scheduled", date: "2024-03-10", rewardStatus: "Pending", amount: "$250" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your referral program.</p>
        </div>

        {/* Revenue Highlight */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-md p-6 mb-8 text-white">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
            <Link href="/analytics">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-green-700 gap-2">
                <BarChart2 className="h-4 w-4" />
                View Analytics
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
              <p className="text-4xl font-bold">{referralStats.totalRevenue}</p>
              <p className="mt-2 text-green-100">From {referralStats.successful} installations</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Rewards Paid</h2>
              <p className="text-4xl font-bold">{referralStats.totalRewardsAmount}</p>
              <p className="mt-2 text-green-100">$250 per referral</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Projected Revenue</h2>
              <p className="text-4xl font-bold">{referralStats.projectedRevenue}</p>
              <p className="mt-2 text-green-100">Including pending projects</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard 
            title="Total Referrals" 
            value={referralStats.totalReferrals} 
            icon={Users}
          />
          <StatsCard 
            title="Pending Verification" 
            value={referralStats.pendingVerification} 
            icon={Clock} 
            iconClassName="bg-yellow-100"
          />
          <StatsCard 
            title="Successful Referrals" 
            value={referralStats.successful} 
            icon={CheckCircle} 
            iconClassName="bg-green-100"
          />
          <StatsCard 
            title="Rewards Given" 
            value={referralStats.rewardsGiven} 
            icon={DollarSign} 
            iconClassName="bg-blue-100"
          />
          <StatsCard 
            title="Conversion Rate" 
            value={referralStats.conversionRate} 
            icon={TrendingUp} 
            iconClassName="bg-purple-100"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button className="gap-2" onClick={() => setIsGenerateModalOpen(true)}>
            <Plus className="h-5 w-5" />
            Generate New Referral Code
          </Button>
          <Button className="gap-2" onClick={() => setIsImportModalOpen(true)}>
            <Upload className="h-5 w-5" />
            Bulk Import Customers
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => alert("Report downloaded successfully!")}>
            <Download className="h-5 w-5" />
            Export Report
          </Button>
          <Button variant="secondary" className="gap-2" onClick={() => alert("Filter options will be available soon!")}>
            <Filter className="h-5 w-5" />
            Filter
          </Button>
        </div>

        {/* Recent Referrals */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Referrals</h2>
            <Link href="/referrals" className="text-green-600 hover:underline font-medium">
              View All Referrals →
            </Link>
          </div>

          <ReferralsTable referrals={recentReferrals} compact={true} />
        </div>
      </div>

      {/* Generate Code Modal */}
      <GenerateCodeModal 
        isOpen={isGenerateModalOpen} 
        onClose={() => setIsGenerateModalOpen(false)} 
      />

      {/* Bulk Import Modal */}
      <BulkImportModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)} 
      />
    </div>
  );
} 