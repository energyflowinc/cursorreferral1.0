"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "../../components/header";
import { Button } from "../../components/ui/button";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Edit, 
  Trash2, 
  Plus, 
  Download, 
  ExternalLink,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { GenerateCodeModal } from "../../components/generate-code-modal";

// Sample customer data - in a real app, this would come from an API
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
    status: "active",
    notes: "John has been very satisfied with his solar installation and has been actively referring friends and family."
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
    status: "active",
    notes: "Maria recently had her HVAC system installed. Follow up in a month to check satisfaction."
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
    status: "active",
    notes: "Robert is one of our top referrers. Consider offering a special bonus for his next referral."
  }
];

// Sample referral data for this customer
const referrals = [
  {
    id: 101,
    referralCode: "JOHNS123456",
    referredCustomer: "Emma Johnson",
    referredEmail: "emma.johnson@example.com",
    referredPhone: "555-111-2222",
    referredLocation: "45 Harvard Square, Cambridge, MA 02138",
    status: "Completed",
    date: "2024-02-28",
    rewardStatus: "Paid",
    amount: "$250",
    notes: "Emma was referred by John and completed a solar installation."
  },
  {
    id: 102,
    referralCode: "JOHNS234567",
    referredCustomer: "Michael Brown",
    referredEmail: "michael.brown@example.com",
    referredPhone: "555-333-4444",
    referredLocation: "78 Newbury Street, Boston, MA 02116",
    status: "Installation Scheduled",
    date: "2024-03-15",
    rewardStatus: "Pending",
    amount: "$250",
    notes: "Michael is scheduled for installation next week."
  },
  {
    id: 103,
    referralCode: "JOHNS345678",
    referredCustomer: "Sarah Wilson",
    referredEmail: "sarah.wilson@example.com",
    referredPhone: "555-555-6666",
    referredLocation: "123 Commonwealth Ave, Boston, MA 02215",
    status: "Quote Provided",
    date: "2024-03-05",
    rewardStatus: "Pending",
    amount: "$250",
    notes: "Sarah is considering the quote. Follow up next week."
  }
];

export default function CustomerDetail() {
  const params = useParams();
  const customerId = Number(params.id);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'referrals' | 'notes'>('referrals');
  
  // Find the customer by ID
  const customer = customers.find(c => c.id === customerId);
  
  if (!customer) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Customer Not Found</h2>
            <p className="text-gray-600 mb-6">The customer you're looking for doesn't exist or has been removed.</p>
            <Link href="/customers">
              <Button>Return to Customers</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <Link href="/customers" className="text-gray-600 hover:text-green-600 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Customers
          </Link>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              className="gap-2" 
              onClick={() => setIsGenerateModalOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Generate Referral Code
            </Button>
            <Button variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Customer
            </Button>
            <Button variant="outline" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
        
        {/* Customer Info Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl font-semibold">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{customer.name}</h1>
                  <p className="text-gray-600">Customer #{customer.id}</p>
                </div>
              </div>
              
              <div>
                <span className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
                  customer.status === "active" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {customer.status === "active" ? "Active Customer" : "Inactive Customer"}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-900">{customer.email}</p>
                      <p className="text-sm text-gray-500">Email</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-900">{customer.phone}</p>
                      <p className="text-sm text-gray-500">Phone</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-900">{customer.address}</p>
                      <p className="text-sm text-gray-500">Address</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.projectType === "Solar" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {customer.projectType}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Project Type</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-900">{new Date(customer.installationDate).toLocaleDateString()}</p>
                      <p className="text-sm text-gray-500">Installation Date</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-900">${customer.projectValue.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Project Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Referrals Sent</h3>
                <p className="text-3xl font-bold text-green-600">{customer.referralsSent}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Referrals Converted</h3>
                <p className="text-3xl font-bold text-green-600">{customer.referralsConverted}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Conversion Rate</h3>
                <p className="text-3xl font-bold text-green-600">
                  {customer.referralsSent > 0 
                    ? `${Math.round((customer.referralsConverted / customer.referralsSent) * 100)}%` 
                    : "0%"}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="border-b border-gray-100">
            <div className="flex">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'referrals'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('referrals')}
              >
                Referrals
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'notes'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('notes')}
              >
                Notes
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === 'referrals' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Referral History</h2>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
                
                {referrals.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Referral Code
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Referred Customer
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Reward
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {referrals.map((referral) => (
                          <tr key={referral.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{referral.referralCode}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{referral.referredCustomer}</div>
                              <div className="text-sm text-gray-500">{referral.referredEmail}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{new Date(referral.date).toLocaleDateString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                referral.status === "Completed" 
                                  ? "bg-green-100 text-green-800" 
                                  : referral.status === "Installation Scheduled" 
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {referral.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{referral.amount}</div>
                              <div className="text-sm text-gray-500">{referral.rewardStatus}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link href={`/referrals/${referral.id}`}>
                                <Button variant="ghost" size="sm" className="gap-1">
                                  <ExternalLink className="h-4 w-4" />
                                  View
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No referrals found for this customer</p>
                    <Button 
                      className="mt-4 gap-2"
                      onClick={() => setIsGenerateModalOpen(true)}
                    >
                      <Plus className="h-4 w-4" />
                      Generate Referral Code
                    </Button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'notes' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Customer Notes</h2>
                  <Button size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Note
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-sm font-medium text-gray-900">Customer Notes</h3>
                        <span className="text-xs text-gray-500">Added on {new Date().toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-700">{customer.notes}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-sm font-medium text-gray-900">Follow-up Reminder</h3>
                        <span className="text-xs text-gray-500">Added on {new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-700">Follow up with {customer.name} about their experience with the {customer.projectType} installation and ask if they have any friends or family who might be interested.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Generate Code Modal */}
      <GenerateCodeModal 
        isOpen={isGenerateModalOpen} 
        onClose={() => setIsGenerateModalOpen(false)} 
      />
    </div>
  );
} 