"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "../components/header";
import { Button } from "../components/ui/button";
import { StatsCard } from "../components/stats-card";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Download, 
  Users, 
  MapPin,
  ArrowUpRight,
  ArrowDownRight,
  X
} from "lucide-react";

export default function Analytics() {
  const [activeTimeframe, setActiveTimeframe] = useState("6M");
  const [showPieChartDetails, setShowPieChartDetails] = useState(false);
  const [showMapView, setShowMapView] = useState(false);
  
  // Sample data - in a real application, this would come from an API
  const analyticsData = {
    totalRevenue: "$875,000",
    totalRewards: "$8,750",
    conversionRate: "83%",
    averageTimeToConversion: "14 days",
    monthlyGrowth: "12%",
    topReferrers: [
      { name: "John Smith", count: 5, revenue: "$125,000" },
      { name: "Maria Garcia", count: 4, revenue: "$100,000" },
      { name: "Robert Wilson", count: 3, revenue: "$75,000" },
    ],
    topLocations: [
      { name: "Boston, MA", count: 8, revenue: "$200,000" },
      { name: "Austin, TX", count: 6, revenue: "$150,000" },
      { name: "Seattle, WA", count: 5, revenue: "$125,000" },
    ],
    monthlyReferrals: [
      { month: "Jan", count: 8 },
      { month: "Feb", count: 12 },
      { month: "Mar", count: 10 },
      { month: "Apr", count: 15 },
      { month: "May", count: 18 },
      { month: "Jun", count: 20 },
    ],
    statusBreakdown: [
      { status: "Completed", count: 35 },
      { status: "Installation Scheduled", count: 5 },
      { status: "Quote Provided", count: 2 },
      { status: "Pending", count: 0 },
    ]
  };

  const handleExportReport = () => {
    // In a real application, this would generate and download a report
    alert("Analytics report downloaded successfully!");
  };

  const handleImplementRecommendation = (recommendation: string) => {
    // In a real application, this would implement the recommendation
    alert(`${recommendation} will be implemented soon!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
            <p className="text-gray-600">Detailed insights into your referral program performance</p>
          </div>
          <Button variant="outline" className="gap-2" onClick={handleExportReport}>
            <Download className="h-5 w-5" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Total Revenue</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.totalRevenue}</h3>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">12% increase</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Conversion Rate</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.conversionRate}</h3>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">5% increase</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Avg. Time to Conversion</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.averageTimeToConversion}</h3>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowDownRight className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">2 days faster</span>
              <span className="text-gray-500 ml-1">than last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Monthly Growth</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">{analyticsData.monthlyGrowth}</h3>
              </div>
              <div className="bg-yellow-100 p-2 rounded-full">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">3% increase</span>
              <span className="text-gray-500 ml-1">from previous trend</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Referrals Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Monthly Referrals</h3>
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={activeTimeframe === "3M" ? "bg-gray-100" : ""}
                  onClick={() => setActiveTimeframe("3M")}
                >
                  3M
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={activeTimeframe === "6M" ? "bg-gray-100" : ""}
                  onClick={() => setActiveTimeframe("6M")}
                >
                  6M
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={activeTimeframe === "1Y" ? "bg-gray-100" : ""}
                  onClick={() => setActiveTimeframe("1Y")}
                >
                  1Y
                </Button>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {analyticsData.monthlyReferrals.map((month) => (
                <div key={month.month} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-green-500 rounded-t-sm" 
                    style={{ height: `${(month.count / 20) * 100}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">{month.month}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Breakdown Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Referral Status Breakdown</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1"
                onClick={() => setShowPieChartDetails(true)}
              >
                <PieChart className="h-4 w-4" />
                View Details
              </Button>
            </div>
            <div className="flex items-center justify-center h-64">
              <div className="grid grid-cols-2 gap-4 w-full">
                {analyticsData.statusBreakdown.map((status) => (
                  <div key={status.status} className="flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-2 ${
                      status.status === "Completed" ? "bg-green-500" :
                      status.status === "Installation Scheduled" ? "bg-blue-500" :
                      status.status === "Quote Provided" ? "bg-yellow-500" :
                      "bg-gray-500"
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{status.status}</div>
                      <div className="text-xs text-gray-500">{status.count} referrals</div>
                    </div>
                    <div className="text-sm font-semibold">
                      {Math.round((status.count / 42) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Referrers */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Top Referrers</h3>
              <Link href="/referrals" className="text-green-600 hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {analyticsData.topReferrers.map((referrer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-600 h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{referrer.name}</div>
                      <div className="text-sm text-gray-500">{referrer.count} successful referrals</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{referrer.revenue}</div>
                    <div className="text-sm text-gray-500">revenue generated</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Locations */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Top Locations</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1"
                onClick={() => setShowMapView(true)}
              >
                <MapPin className="h-4 w-4" />
                View Map
              </Button>
            </div>
            <div className="space-y-4">
              {analyticsData.topLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-500">{location.count} referrals</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{location.revenue}</div>
                    <div className="text-sm text-gray-500">revenue generated</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-green-100 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Increase Referral Rewards</h4>
              <p className="text-sm text-gray-600 mb-3">
                Consider increasing referral rewards by 10% to boost participation. Your current ROI allows for this adjustment.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleImplementRecommendation("Increased referral rewards")}
              >
                Implement
              </Button>
            </div>
            <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Target Boston Area</h4>
              <p className="text-sm text-gray-600 mb-3">
                Boston shows the highest conversion rate. Consider a targeted campaign to leverage this success.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleImplementRecommendation("Boston area targeted campaign")}
              >
                Create Campaign
              </Button>
            </div>
            <div className="p-4 border border-purple-100 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Follow-up Automation</h4>
              <p className="text-sm text-gray-600 mb-3">
                Implement automated follow-ups for pending referrals to reduce conversion time by an estimated 3 days.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleImplementRecommendation("Follow-up automation")}
              >
                Set Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart Details Modal */}
      {showPieChartDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Referral Status Breakdown</h2>
              <button onClick={() => setShowPieChartDetails(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                  {/* Simple pie chart visualization */}
                  <div className="relative h-64 w-64">
                    <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0)' }}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%)' }}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%)' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">42</div>
                        <div className="text-sm text-gray-500">Total Referrals</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Status Distribution</h3>
                  <div className="space-y-4">
                    {analyticsData.statusBreakdown.map((status) => (
                      <div key={status.status} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`h-4 w-4 rounded-full mr-3 ${
                            status.status === "Completed" ? "bg-green-500" :
                            status.status === "Installation Scheduled" ? "bg-blue-500" :
                            status.status === "Quote Provided" ? "bg-yellow-500" :
                            "bg-gray-500"
                          }`}></div>
                          <div className="font-medium">{status.status}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-lg font-semibold mr-2">{status.count}</div>
                          <div className="text-sm text-gray-500">
                            ({Math.round((status.count / 42) * 100)}%)
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-800 mb-2">Insights</h4>
                    <p className="text-sm text-gray-600">
                      Your completion rate of 83% is excellent. Focus on converting the 7 referrals currently in the pipeline to increase revenue by an estimated $175,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map View Modal */}
      {showMapView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Geographic Distribution</h2>
              <button onClick={() => setShowMapView(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 h-80 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive map would be displayed here</p>
                  <p className="text-sm text-gray-400">Showing referral distribution across the United States</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {analyticsData.topLocations.map((location, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-3">
                        {index + 1}
                      </div>
                      <div className="font-semibold">{location.name}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-gray-500">Referrals</div>
                        <div className="font-medium">{location.count}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Revenue</div>
                        <div className="font-medium">{location.revenue}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Conversion</div>
                        <div className="font-medium">85%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Avg. Value</div>
                        <div className="font-medium">$25,000</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 