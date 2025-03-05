import Image from "next/image";
import Link from "next/link";
import { DollarSign, Users, TrendingUp, Award, Home as HomeIcon, BarChart } from "lucide-react";
import { Header } from "./components/header";

export default function Home() {
  // Sample data for the revenue metrics
  const metrics = {
    totalRevenue: "$875,000",
    averageReward: "$250",
    averageProjectRevenue: "$25,000",
    totalReferrals: "5,000+",
    conversionRate: "83%",
    totalProjects: "35+"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Grow Your Business Through Customer Referrals</h2>
              <p className="text-xl mb-8 text-green-50">
                Our referral tracking system helps home performance contractors increase revenue 
                through satisfied customer referrals.
              </p>
              <div className="space-x-4">
                <Link href="/dashboard" className="bg-white text-green-700 px-6 py-3 rounded-md hover:bg-green-50 transition-colors font-medium">
                  Go to Dashboard
                </Link>
                <Link href="/referrals/new" className="border border-white text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
                  Start New Referral
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h3 className="text-xl font-semibold mb-4">Revenue Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center">
                      <HomeIcon className="h-5 w-5 text-green-600 mr-2" />
                      <span>Average Project Revenue</span>
                    </div>
                    <span className="font-bold text-green-600">{metrics.averageProjectRevenue}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <span>Referral Reward</span>
                    </div>
                    <span className="font-bold text-green-600">{metrics.averageReward}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 text-green-600 mr-2" />
                      <span>Completed Projects</span>
                    </div>
                    <span className="font-bold text-green-600">{metrics.totalProjects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span>Conversion Rate</span>
                    </div>
                    <span className="font-bold text-green-600">{metrics.conversionRate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Drive Significant Revenue Through Referrals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our customers see substantial returns on their referral programs. Each installation 
              generates an average of $25,000 in revenue for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Total Revenue Generated</h3>
              <p className="text-3xl font-bold text-green-600">{metrics.totalRevenue}</p>
              <p className="text-gray-500 mt-2">From 35+ successful installations</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <HomeIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Average Project Revenue</h3>
              <p className="text-3xl font-bold text-green-600">{metrics.averageProjectRevenue}</p>
              <p className="text-gray-500 mt-2">Per installation</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Referral Reward</h3>
              <p className="text-3xl font-bold text-green-600">{metrics.averageReward}</p>
              <p className="text-gray-500 mt-2">Per successful referral</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Conversion Rate</h3>
              <p className="text-3xl font-bold text-green-600">{metrics.conversionRate}</p>
              <p className="text-gray-500 mt-2">Of referrals to installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The Math Is Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our referral program can dramatically increase your business revenue
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">10 Referrals</h3>
                <p className="text-gray-600">Start with just 10 customer referrals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">83% Conversion</h3>
                <p className="text-gray-600">Our average conversion rate</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">$25,000 Per Project</h3>
                <p className="text-gray-600">Average revenue per installation</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">= $207,500 Revenue</h3>
              <p className="text-gray-600">10 referrals × 83% conversion × $25,000 = $207,500</p>
              <p className="text-gray-600 mt-2">Minus $2,075 in rewards (8.3 successful referrals × $250)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique Referral Codes</h3>
              <p className="text-gray-600">Generate personalized referral codes for each of your existing customers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Tracking</h3>
              <p className="text-gray-600">Monitor installation progress and verify completion dates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automatic Rewards</h3>
              <p className="text-gray-600">Automatically track and distribute rewards to referring customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">HomeProReferrals</h2>
              <p className="text-gray-400">The smart way to track referrals</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-green-300 transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="hover:text-green-300 transition-colors">
                Dashboard
              </Link>
              <Link href="/referrals" className="hover:text-green-300 transition-colors">
                Referrals
              </Link>
              <Link href="/(auth)/login" className="hover:text-green-300 transition-colors">
                Login
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HomeProReferrals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
