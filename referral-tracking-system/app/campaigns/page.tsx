"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "../components/header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Plus,
  Search,
  Filter,
  Mail,
  MessageSquare,
  Calendar,
  BarChart2,
  Play,
  Pause,
  MoreHorizontal,
  Users
} from "lucide-react";

// Sample campaign data
const campaigns = [
  {
    id: 1,
    name: "Spring Energy Savings Campaign",
    type: "Email",
    status: "Active",
    audience: "Solar Installation Customers",
    sentCount: 150,
    openRate: "45%",
    clickRate: "28%",
    conversionRate: "12%",
    schedule: "Weekly",
    lastSent: "2024-03-15",
    nextSend: "2024-03-22"
  },
  {
    id: 2,
    name: "Summer HVAC Referral Program",
    type: "SMS",
    status: "Draft",
    audience: "HVAC Installation Customers",
    sentCount: 0,
    openRate: "-",
    clickRate: "-",
    conversionRate: "-",
    schedule: "Not scheduled",
    lastSent: "-",
    nextSend: "-"
  },
  {
    id: 3,
    name: "Energy Assessment Promotion",
    type: "Email + SMS",
    status: "Scheduled",
    audience: "All Customers",
    sentCount: 0,
    openRate: "-",
    clickRate: "-",
    conversionRate: "-",
    schedule: "One-time",
    lastSent: "-",
    nextSend: "2024-03-25"
  }
];

export default function Campaigns() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Filter campaigns based on search and filters
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || campaign.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesStatus = filterStatus === "all" || campaign.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Referral Campaigns</h1>
            <p className="text-gray-600">Create and manage your referral campaigns</p>
          </div>
          <Link href="/campaigns/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Campaign
            </Button>
          </Link>
        </div>

        {/* Campaign Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Play className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Sent</p>
                <p className="text-2xl font-bold text-gray-800">150</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Open Rate</p>
                <p className="text-2xl font-bold text-gray-800">45%</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <BarChart2 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Conversion</p>
                <p className="text-2xl font-bold text-gray-800">12%</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="email + sms">Email + SMS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Audience
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Schedule
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {campaign.type === "Email" ? (
                            <Mail className="h-5 w-5 text-gray-400" />
                          ) : campaign.type === "SMS" ? (
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          ) : (
                            <div className="flex -space-x-1">
                              <Mail className="h-5 w-5 text-gray-400" />
                              <MessageSquare className="h-5 w-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            <Link href={`/campaigns/${campaign.id}`} className="hover:text-green-600">
                              {campaign.name}
                            </Link>
                          </div>
                          <div className="text-sm text-gray-500">{campaign.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{campaign.audience}</div>
                      <div className="text-sm text-gray-500">{campaign.sentCount} sent</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Open Rate: {campaign.openRate}
                      </div>
                      <div className="text-sm text-gray-500">
                        Click: {campaign.clickRate} | Conv: {campaign.conversionRate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{campaign.schedule}</div>
                      <div className="text-sm text-gray-500">
                        Next: {campaign.nextSend}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        campaign.status === "Active" 
                          ? "bg-green-100 text-green-800"
                          : campaign.status === "Draft"
                          ? "bg-gray-100 text-gray-800"
                          : campaign.status === "Scheduled"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link href={`/campaigns/${campaign.id}`}>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredCampaigns.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No campaigns found matching your criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 