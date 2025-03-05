"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "../components/header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign,
  Star,
  MoreHorizontal,
  ArrowUpDown
} from "lucide-react";

// Sample customer data
const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "555-123-4567",
    address: "123 Maple Street, Boston, MA 02108",
    projectType: "Solar",
    installationDate: "2023-10-15",
    projectValue: 25000,
    referralsSent: 3,
    referralsConverted: 2,
    status: "active"
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "555-987-6543",
    address: "789 Congress Ave, Austin, TX 78701",
    projectType: "HVAC",
    installationDate: "2023-11-20",
    projectValue: 18000,
    referralsSent: 1,
    referralsConverted: 0,
    status: "active"
  },
  {
    id: 3,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    phone: "555-456-7890",
    address: "421 Pike Street, Seattle, WA 98101",
    projectType: "Solar",
    installationDate: "2023-09-05",
    projectValue: 27500,
    referralsSent: 4,
    referralsConverted: 3,
    status: "active"
  },
  {
    id: 4,
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    phone: "555-234-5678",
    address: "1001 Market Street, San Francisco, CA 94103",
    projectType: "Solar",
    installationDate: "2023-08-12",
    projectValue: 30000,
    referralsSent: 2,
    referralsConverted: 2,
    status: "active"
  },
  {
    id: 5,
    name: "Thomas Harris",
    email: "thomas.harris@example.com",
    phone: "555-876-5432",
    address: "1644 Larimer Street, Denver, CO 80202",
    projectType: "HVAC",
    installationDate: "2023-12-03",
    projectValue: 15000,
    referralsSent: 0,
    referralsConverted: 0,
    status: "inactive"
  },
  {
    id: 6,
    name: "Patricia Moore",
    email: "patricia.moore@example.com",
    phone: "555-345-6789",
    address: "1022 SW Salmon Street, Portland, OR 97205",
    projectType: "Solar",
    installationDate: "2023-07-22",
    projectValue: 28500,
    referralsSent: 5,
    referralsConverted: 3,
    status: "active"
  },
  {
    id: 7,
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "555-654-3210",
    address: "233 E Wacker Drive, Chicago, IL 60601",
    projectType: "HVAC",
    installationDate: "2023-10-30",
    projectValue: 16500,
    referralsSent: 1,
    referralsConverted: 1,
    status: "active"
  },
  {
    id: 8,
    name: "Linda White",
    email: "linda.white@example.com",
    phone: "555-789-0123",
    address: "900 Biscayne Blvd, Miami, FL 33132",
    projectType: "Solar",
    installationDate: "2023-11-15",
    projectValue: 26000,
    referralsSent: 0,
    referralsConverted: 0,
    status: "inactive"
  }
];

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProjectType, setFilterProjectType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Filter customers based on search query and filters
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesProjectType = filterProjectType === "all" || 
      customer.projectType.toLowerCase() === filterProjectType.toLowerCase();
    
    const matchesStatus = filterStatus === "all" || 
      customer.status === filterStatus;
    
    return matchesSearch && matchesProjectType && matchesStatus;
  });

  // Calculate stats
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === "active").length;
  const totalReferralsSent = customers.reduce((sum, c) => sum + c.referralsSent, 0);
  const totalReferralsConverted = customers.reduce((sum, c) => sum + c.referralsConverted, 0);
  const conversionRate = totalReferralsSent > 0 
    ? Math.round((totalReferralsConverted / totalReferralsSent) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
            <p className="text-gray-600">Manage your customers and their referral activity</p>
          </div>
          <div className="flex space-x-3">
            <Link href="/customers/new">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Customer
              </Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Customers</p>
                <p className="text-2xl font-bold text-gray-800">{totalCustomers}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Customers</p>
                <p className="text-2xl font-bold text-gray-800">{activeCustomers}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Referrals Sent</p>
                <p className="text-2xl font-bold text-gray-800">{totalReferralsSent}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-800">{conversionRate}%</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
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
                placeholder="Search customers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <Select 
                  value={filterProjectType}
                  onChange={(e) => setFilterProjectType(e.target.value)}
                >
                  <option value="all">All Project Types</option>
                  <option value="solar">Solar</option>
                  <option value="hvac">HVAC</option>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Select>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Sort
              </Button>
            </div>
          </div>
        </div>
        
        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referral Activity
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
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            <Link href={`/customers/${customer.id}`} className="hover:text-green-600">
                              {customer.name}
                            </Link>
                          </div>
                          <div className="text-sm text-gray-500">Customer #{customer.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center mb-1">
                        <Mail className="h-4 w-4 text-gray-400 mr-1" />
                        {customer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mb-1">
                        <Phone className="h-4 w-4 text-gray-400 mr-1" />
                        {customer.phone}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        {customer.address.split(',')[0]}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="mb-1">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          customer.projectType === "Solar" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {customer.projectType}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mb-1">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        {new Date(customer.installationDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                        ${customer.projectValue.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {customer.referralsSent} Referrals Sent
                      </div>
                      <div className="text-sm text-gray-500">
                        {customer.referralsConverted} Converted
                      </div>
                      <div className="text-sm text-gray-500">
                        {customer.referralsSent > 0 
                          ? `${Math.round((customer.referralsConverted / customer.referralsSent) * 100)}% Rate` 
                          : "No referrals yet"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {customer.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end">
                        <Link href={`/customers/${customer.id}`}>
                          <Button variant="ghost" size="sm">
                            View
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
          
          {filteredCustomers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No customers found matching your criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 